# 阿里云部署说明

这份文档说明如何把当前 Astro 项目部署到阿里云 ECS，并让前端页面和 `/api/contact` 一起通过 Node 进程运行。

## 结论先说

当前项目默认还是静态站点配置。要让接口可用，部署到阿里云时建议切换为 **Astro Node SSR**，然后在 ECS 上直接启动 Node 服务。

这样做的好处是：

- 页面和 API 路由一起部署，不需要额外单独起后端
- 本地开发仍然可以继续用 `npm run dev`
- 生产环境可以用 PM2 或 systemd 托管 Node 进程

## 1. 需要先做的项目改动

先安装 Node adapter：

```bash
npm i @astrojs/node
```

然后把 `astro.config.mjs` 改成 Node SSR 模式，配置如下：

```ts
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'server',
  adapter: node({ mode: 'standalone' }),
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
```

如果不加这一步，`/api/contact` 只能在开发环境里调试，生产环境无法作为 Node 服务启动。

## 2. 环境变量配置

项目里接口读取的是：

```ts
import.meta.env.FEISHU_BOT_WEBHOOK_URL
```

所以你需要在阿里云服务器上配置：

```env
FEISHU_BOT_WEBHOOK_URL=你的飞书机器人webhook地址
```

推荐做法：

- 本地开发放到 `.env.local`
- 服务器上放到系统环境变量，或放到 PM2 / systemd 启动脚本里

注意：

- 不要把 webhook 直接写进代码
- 不要提交 `.env.local` 到 Git

## 3. 本地开发方式

本地开发不会变，还是：

```bash
npm run dev
```

如果你想在本地模拟生产环境，可以：

```bash
npm run build
node dist/server/entry.mjs
```

这样本地就会以和阿里云接近的方式运行。

## 4. 阿里云 ECS 部署步骤

### 4.1 安装运行环境

在 ECS 上准备好：

- Node.js 22 或更高版本
- Git
- Nginx（可选，但强烈建议）
- PM2（推荐）

### 4.2 拉取代码

```bash
git clone 你的仓库地址
cd linked-power-website
```

### 4.3 安装依赖

```bash
npm ci
```

### 4.4 配置环境变量

例如临时导出：

```bash
export FEISHU_BOT_WEBHOOK_URL=你的飞书机器人webhook地址
```

如果你用 PM2 或 systemd，建议写到对应的启动配置里。

### 4.5 构建项目

```bash
npm run build
```

### 4.6 启动服务

```bash
PORT=3001 node dist/server/entry.mjs
```

这里固定让 Astro 监听 `3001`，然后由 Nginx 把外部请求转发到这个端口。生产环境建议前面再加一层 Nginx。

## 5. 用 PM2 托管

如果你不想手动保持终端运行，推荐 PM2：

```bash
npm i -g pm2
HOST=127.0.0.1 PORT=3001 pm2 start dist/server/entry.mjs --name linked-power
pm2 save
pm2 startup
```

如果你想让重启后也自动带上环境变量，建议把 `FEISHU_BOT_WEBHOOK_URL` 和 `PORT=3001` 一起写进 PM2 的启动脚本或 ecosystem 配置。

之后服务挂了可以自动拉起，也方便你重启。

## 6. Nginx 反向代理示例

如果想完全不影响现有 80 端口服务，建议新站点单独用一个端口对外暴露，例如：

- Astro 服务监听 `3001`
- Nginx 对外监听 `8085`
- 项目目录放在 `/var/www/linked-power-website`

对应的反向代理可以这样写：

```nginx
server {
  listen 8085;
  server_name 47.92.148.9;

  location / {
    proxy_pass http://127.0.0.1:3001;
    proxy_http_version 1.1;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
  }
}
```

这样做的好处是：

- 现有 `80` 端口和原来的站点配置完全不动
- 新项目独立跑在 `8085`，互不影响
- 以后如果要切域名，再单独给这个端口加一层域名转发即可

如果后面要上 HTTPS，再给这个新站点单独配证书即可。

## 7. 部署后检查点

部署完成后，至少检查这几项：

- 首页能正常打开
- `/api/contact` 能收到 POST 请求
- 飞书机器人能收到消息
- `.env` 改动后重启服务能生效

## 8. 常见误区

### 只上 OSS / CDN

如果只把网站放到 OSS 或 CDN，页面能访问，但 `/api/contact` 这种接口不会执行。

### 只改前端不改构建模式

如果不切到 Node SSR，生产环境通常只能导出静态文件，API 路由不会跟着部署上去。

### 环境变量没重启

很多平台更新环境变量后需要重启进程，单改配置不一定立即生效。

## 9. 推荐的最终方案

最稳妥的阿里云方案是：

- ECS 上跑 Astro Node 服务
- PM2 守护进程
- Nginx 做域名和 HTTPS
- `FEISHU_BOT_WEBHOOK_URL` 配在服务器环境里

这样前台和接口就是一个应用，维护成本最低。
