# Field notes, on learning AI

一个记录 AI 学习历程的个人博客，基于 [Astro](https://astro.build) + GitHub Pages。

## 快速开始

```bash
npm install    # 第一次需要
npm run dev    # 本地预览（http://localhost:4321）
npm run build  # 构建生产版本
```

## 项目结构

```
├── src/
│   ├── config.ts              ← 🎨 改这个文件定制所有内容
│   ├── content/posts/         ← 📝 在这里写 Markdown 文章
│   ├── data/timeline.ts       ← 📅 时间线事件数据
│   ├── pages/
│   │   ├── index.astro        ← 首页
│   │   ├── writing/           ← 文章列表 + 详情
│   │   ├── timeline.astro     ← 时间线页
│   │   └── say-hi.astro       ← 联系页
│   ├── components/            ← 组件（头像等）
│   ├── layouts/               ← 布局
│   └── styles/global.css      ← 全局样式
├── public/                    ← 静态资源（favicon 等）
└── .github/workflows/         ← GitHub Actions 自动部署
```

## 常见操作

### 写新文章

在 `src/content/posts/` 下创建新的 `.md` 文件，开头写：

```yaml
---
title: "文章标题"
date: 2026-04-20
note: "写作动机：为什么写这一篇"
tag: "深度学习"
mood: "周日，阳光很好"
readTime: 5
---

正文从这里开始……
```

### 修改个人信息

打开 `src/config.ts`，里面所有可以改的地方都有中文注释。

### 添加时间线事件

打开 `src/data/timeline.ts`，在 `pastEvents` 数组里加一项。

## 部署

Push 到 GitHub 主分支，GitHub Actions 会自动构建并发布到 GitHub Pages。

详细部署步骤见 `DEPLOY-WINDOWS.md`。

---

Made with ♡
