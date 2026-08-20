#!/usr/bin/env bash
set -euo pipefail

REMOTE_HOST="root@47.92.148.9"
REMOTE_DIR="/var/www/linked-power-website"

PROJECT_DIR="$(cd "$(dirname "$0")" && pwd)"

if [ ! -f "$PROJECT_DIR/package.json" ]; then
  echo "Error: package.json not found in $PROJECT_DIR"
  exit 1
fi

if ! command -v scp >/dev/null 2>&1; then
  echo "Error: scp is not installed"
  exit 1
fi

if ! command -v ssh >/dev/null 2>&1; then
  echo "Error: ssh is not installed"
  exit 1
fi

echo "[1/4] Building project..."
(
  cd "$PROJECT_DIR"
  npm ci
  npm run build
)

echo "[2/4] Creating remote directory..."
ssh "$REMOTE_HOST" "mkdir -p '$REMOTE_DIR'"

echo "[3/4] Uploading files..."
rsync -av --delete \
  --exclude '.git' \
  --exclude 'node_modules' \
  --exclude '.env' \
  --exclude '.env.local' \
  "$PROJECT_DIR/" "$REMOTE_HOST:$REMOTE_DIR/"

echo "[4/4] Deploy complete"
echo "Next steps on server:"
echo "  cd $REMOTE_DIR"
echo "  npm ci"
echo "  export FEISHU_BOT_WEBHOOK_URL='your-webhook-url'"
echo "  pm2 start dist/server/entry.mjs --name linked-power"
