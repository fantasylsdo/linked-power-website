# 云部署说明

这份文档说明如何把当前 Astro 项目部署到云ECS，并让前端页面和 `/api/contact` 一起通过 Node 进程运行。

## 结论先说

当前项目已经配置为 **Astro Node SSR**，页面和 `/api/contact` 会一起由 Node 服务提供。

推荐在本地完成依赖安装和生产构建，然后只把构建产物上传到 ECS。云服务器不需要拉取源码，也不需要再次编译。

这样做的好处是：

- 页面和 API 路由一起部署，不需要额外单独起后端
- 本地开发仍然可以继续用 `npm run dev`
- 生产环境可以用 PM2 或 systemd 托管 Node 进程

## 1. 本地开发和生产构建

本地开发不会变，还是：

```bash
npm run dev
```

如果你想在本地模拟生产环境，可以：

```bash
npm run build
node dist/server/entry.mjs
```

这样本地就会以和云接近的方式运行。

本地构建生产产物：

```bash
npm ci
npm run build
```

构建完成后，运行文件位于 `dist/server/entry.mjs`，静态资源位于 `dist/client/`。

建议先在本地模拟生产环境：

```bash
PORT=3001 node dist/server/entry.mjs
```

## 2. 云 ECS 部署步骤

### 4.1 安装运行环境

在 ECS 上准备好：

- Node.js 22 或更高版本
- Nginx（可选，但强烈建议）
- PM2（推荐）

### 2.2 上传本地构建产物

本地构建完成后，将以下内容上传到 ECS 的 `/var/www/linked-power-website`：

- `dist/`
- `package.json`
- `package-lock.json`

例如在本地项目根目录执行：
scp -r dist/  package.json package-lock.json root@47.116.161.40:/var/www/linked-power-website/
或
```bash
rsync -av --delete \
  --exclude '.git' \
  --exclude 'node_modules' \
  --exclude '.env' \
  --exclude '.env.local' \
  dist package.json package-lock.json \
  root@你的服务器IP:/var/www/linked-power-website/
```

如果使用 `@astrojs/node` 的 standalone 产物仍提示缺少运行时包，再在云端安装生产依赖：

```bash
cd /var/www/linked-power-website
npm ci
```

这里不会执行 `npm run build`，构建已经在本地完成。

### 2.3 启动服务

```bash
HOST=127.0.0.1 PORT=3001 node dist/server/entry.mjs
```
需要加HOST=127.0.0.1， 不然默认是绑定到IPV6的localhost上，后续nginx forward有问题

这里固定让 Astro 监听 `3001`，然后由 Nginx 把外部请求转发到这个端口。生产环境建议前面再加一层 Nginx。

## 3. 用 PM2 托管

如果你不想手动保持终端运行，推荐 PM2：

```bash
npm i -g pm2
HOST=127.0.0.1 PORT=3001 pm2 start dist/server/entry.mjs --name linked-power
pm2 save
pm2 startup
```

如果你想让重启后也自动带上环境变量，建议把 `PORT=3001` 一起写进 PM2 的启动脚本或 ecosystem 配置。

之后服务挂了可以自动拉起，也方便你重启。

## 4. Nginx 按域名分流

推荐使用以下域名：

- 官网：`linked-power.com`
- `www.linked-power.com`：301 跳转到 `linked-power.com`
- 生产系统：`prod.linked-power.com`

不建议使用 `www.prod.linked-power.com`，层级较多。三个域名可以共用 80 端口，Nginx 会根据请求域名分流：官网转发到 Astro 的 `3001` 端口，`www` 做 301 跳转，生产系统继续使用原来的静态目录和 `8000` API。

先在 DNS 中添加三条 A 记录，都指向 `47.92.148.9`：

| 主机记录 | 类型 | 记录值 |
| --- | --- | --- |
| `@` | A | `47.92.148.9` |
| `www` | A | `47.92.148.9` |
| `prod` | A | `47.92.148.9` |

服务器上的 Nginx 配置可以参考项目中的 [`nginx-linked-power.conf`](nginx-linked-power.conf)：

```nginx
# 官网：linked-power.com
server {
  listen 80;
  server_name linked-power.com;

  location / {
    proxy_pass http://127.0.0.1:3001;
    proxy_http_version 1.1;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
  }
}

# www 统一 301 到裸域名
server {
  listen 80;
  server_name www.linked-power.com;
  return 301 http://linked-power.com$request_uri;
}

# 生产系统：prod.linked-power.com
server {
  listen 80;
  server_name prod.linked-power.com;

  root /var/www/production-system/dist;
  index index.html;

  location / {
    try_files $uri $uri/ /index.html;
  }

  location /api/production/ {
    proxy_pass http://127.0.0.1:8000;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
  }
}
```

保留现有 IP 访问时，可以继续保留原来的 `server_name 47.92.148.9` 配置。修改后检查并重载：

```bash
sudo nginx -t
sudo systemctl reload nginx
```

这样做的好处是：

- 官网、www 跳转和生产系统共用 80 端口，但按域名完全隔离
- 原有生产系统仍然使用 `/var/www/production-system/dist` 和 `127.0.0.1:8000`
- 官网由 Astro Node 服务提供，`/api/contact` 也能正常转发
- 后续可以分别为两个域名配置 HTTPS

如果后面要上 HTTPS，再给这个新站点单独配证书即可。

## 5. 部署后检查点

部署完成后，至少检查这几项：

- 首页能正常打开
- `/api/contact` 能收到 POST 请求
- 飞书机器人能收到消息
- `.env` 改动后重启服务能生效

## 6. 常见误区

### 只上 OSS / CDN

如果只把网站放到 OSS 或 CDN，页面能访问，但 `/api/contact` 这种接口不会执行。

### 只改前端不改构建模式

如果不切到 Node SSR，生产环境通常只能导出静态文件，API 路由不会跟着部署上去。

### 环境变量没重启

很多平台更新环境变量后需要重启进程，单改配置不一定立即生效。

## 7. 推荐的最终方案

最稳妥的云方案是：

- 本地构建 Astro Node 产物
- ECS 上只运行 Astro Node 服务
- Nginx 按域名分流主站和生产系统
- PM2 守护进程
- Nginx 做域名和 HTTPS

这样前台和接口就是一个应用，维护成本最低。
