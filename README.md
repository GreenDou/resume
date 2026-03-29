# Greendou Resume

基于 Vite + React + Tailwind CSS 构建的在线简历站点，适合部署到 GitHub Pages。

## 本地开发

### 环境要求

- Node.js 20+
- pnpm 10+

### 启动项目

1. 安装依赖：`pnpm install`
2. 启动开发环境：`pnpm dev`
3. 构建生产版本：`pnpm build`

> 当前站点为纯静态简历页，不依赖任何 API Key 即可运行。

## 部署到 GitHub Pages

仓库已经包含 `.github/workflows/deploy.yml`，推送到 `main` 分支后会自动构建并发布到 GitHub Pages。

### GitHub 仓库设置

1. 打开仓库的 **Settings**。
2. 进入 **Pages**。
3. 在 **Build and deployment** 下选择 **GitHub Actions**。

### 自动部署说明

- `vite.config.ts` 已配置 `base: './'`，适合 GitHub Pages 的静态资源路径。
- 工作流会自动安装依赖、执行 `pnpm build`，并上传 `dist/` 目录。
- `dist/` 已加入忽略规则，不需要手动提交构建产物。

## 内容策略

- 已移除 AI Studio 脚手架残留配置。
- 已去掉前端打包时注入 `GEMINI_API_KEY` 的风险配置。
- 已收敛部分不适合公开简历展示的细节描述，使表述更职业、更适合公开仓库。
