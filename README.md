# 通道雷达

海外支付通道内部决策看板。

## 访问策略

公开 GitHub Pages 只保留访问受限占位页，不再承载业务看板内容：

```text
https://ruihao-pay.github.io/tongdao-radar/
```

真实看板放在本地 `private-app/`，通过 Cloudflare Worker 托管，并在服务端完成飞书 OAuth 登录校验。只有通过公司飞书租户校验的用户才能访问页面和 `data.js`。

## 目录结构

```text
/Users/mac/通道雷达/
├── index.html        # 公开占位页
├── data.js           # 公开空数据 stub
├── private-app/      # 真实看板，本地保留，禁止提交
│   ├── index.html
│   └── data.js
├── src/worker.js     # Cloudflare Worker 飞书登录网关
├── wrangler.toml     # Worker 配置
└── README.md
```

`private-app/`、`.dev.vars`、`.wrangler/` 已加入 `.gitignore`。

## 部署前配置

在飞书开放平台创建或复用内部应用，并把回调地址配置为：

```text
https://<worker-domain>/auth/callback
```

Worker 需要配置以下变量或 secrets：

```bash
wrangler secret put FEISHU_APP_ID
wrangler secret put FEISHU_APP_SECRET
wrangler secret put FEISHU_REDIRECT_URI
wrangler secret put SESSION_SECRET
```

如需在飞书用户信息里读取邮箱，按飞书应用权限实际开通情况配置 OAuth scope：

```bash
wrangler secret put FEISHU_SCOPE
```

至少配置一种公司用户校验规则，否则 Worker 会拒绝所有登录：

```bash
wrangler secret put FEISHU_TENANT_KEY
```

或使用邮箱白名单 / 域名白名单：

```bash
wrangler secret put ALLOWED_EMAILS
wrangler secret put ALLOWED_EMAIL_DOMAINS
```

## 部署

本地确认 `private-app/index.html` 和 `private-app/data.js` 是最新真实看板后执行：

```bash
npx wrangler deploy
```

部署完成后，实际业务访问链接应使用 Worker 域名或绑定的自定义域名，而不是 GitHub Pages 链接。

## 安全边界

- GitHub Pages 不适合承载敏感业务看板；前端 JS 校验可以被绕过，静态 `data.js` 也可以被直接下载。
- 真实看板必须通过服务端网关发放，即 Worker 先验登录，再返回静态资源。
- 已公开提交过的历史版本仍可能存在于 Git 历史和缓存中；如需彻底收口，应将仓库转私有或重写公开历史，并视情况更换公开访问地址。
- 不要把飞书应用密钥、租户 key、白名单或真实业务数据提交到仓库。
