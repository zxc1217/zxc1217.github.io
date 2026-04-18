# Windows 部署手册（零基础版）

这份手册假设你**完全没用过命令行**。按顺序做，大概 30~60 分钟就能让你的网站上线。

遇到任何一步卡住，不要慌，搜索错误信息通常能找到答案。

---

## 目录

1. [准备工作：安装三样工具](#准备工作)
2. [解压项目，第一次在本地跑起来](#本地跑起来)
3. [注册 GitHub 账号并创建仓库](#注册-github)
4. [把项目推送到 GitHub](#推送到-github)
5. [配置 GitHub Pages 自动部署](#配置自动部署)
6. [以后怎么更新文章](#日常更新)
7. [常见问题](#常见问题)

---

<a id="准备工作"></a>
## 1. 准备工作：安装三样工具

你需要装三个软件：**Node.js**（用来运行网站），**Git**（用来上传代码），**VS Code**（编辑器）。

### 1.1 安装 Node.js

1. 打开浏览器，访问 <https://nodejs.org/>
2. 点击左边那个绿色按钮（**LTS** 版本，写着"推荐多数用户"或 "Recommended For Most Users"）
3. 下载完成后打开 `.msi` 安装包
4. 一路点 Next，**所有选项都用默认的**，直到 Install
5. 安装需要几分钟，耐心等
6. 装完后**重启一下电脑**（这一步很重要，不然后面命令行找不到 node）

**验证是否装好：**

- 按 `Win + R`，输入 `cmd`，回车。会弹出一个黑色窗口（命令提示符）
- 在里面输入（复制粘贴也行）：

  ```
  node --version
  ```

  回车。如果显示类似 `v20.11.0` 这样的版本号，就是装好了 ✓
- 再输入：

  ```
  npm --version
  ```

  显示类似 `10.2.4` 就对了 ✓

如果显示"不是内部或外部命令"，说明 Node.js 没装好，重新装一遍，或者重启电脑。

### 1.2 安装 Git

1. 访问 <https://git-scm.com/download/win>
2. 会自动开始下载（叫 "Git-X.XX.X-64-bit.exe"）
3. 下载完双击运行
4. 安装的时候**所有选项都点 Next / 默认**，一直到 Install
   - 装的过程中会问你很多问题（编辑器啊、换行符啊），全部默认就行，不用动
5. 装完后关掉安装向导

**验证：**

- 同样打开 cmd（`Win + R` → `cmd`）
- 输入：

  ```
  git --version
  ```

  显示 `git version 2.XX.X` 就是好了 ✓

### 1.3 安装 VS Code（编辑器）

1. 访问 <https://code.visualstudio.com/>
2. 点"Download for Windows"
3. 下载完双击安装
4. 安装时有几个复选框，**全部打勾**（尤其是"添加到 PATH"和"添加右键菜单"这两个）
5. 一路 Next，安装

装完后在开始菜单搜 "VS Code" 就能打开。

---

<a id="本地跑起来"></a>
## 2. 解压项目，第一次在本地跑起来

### 2.1 找个地方放项目

1. 在 `C:\` 盘下建一个文件夹叫 `projects`（或者任何你喜欢的名字）
2. 把本教程附带的 `ai-blog` 文件夹整个复制进去
3. 最终路径类似 `C:\projects\ai-blog\`

**注意：** 不要放在中文路径或者带空格的路径下（比如 "我的文档"、"Program Files"），会出问题。

### 2.2 用 VS Code 打开项目

1. 打开 VS Code
2. 左上角菜单 `File` → `Open Folder...`
3. 选中 `C:\projects\ai-blog` 文件夹，点"选择文件夹"
4. 左边会列出所有文件

弹出"信任此文件夹中的作者吗"之类的提示，选"是，我信任作者"。

### 2.3 在 VS Code 里打开终端

- 按快捷键 `` Ctrl + ` ``（Ctrl 加键盘左上角那个反引号键）
- 或者菜单 `Terminal` → `New Terminal`
- VS Code 底部会出现一个黑框，这就是终端，以下的命令都在这里输入

### 2.4 安装依赖

在终端里输入（可以复制粘贴）：

```
npm install
```

然后回车。会开始下载一堆文件，用时 1~5 分钟（看网速）。

**可能出现的情况：**

- **如果看到一堆绿色的进度条和文字流动**：正常，等着就行
- **如果卡住不动超过 5 分钟**：Ctrl+C 取消，然后换一下 npm 源（国内网络问题）：

  ```
  npm config set registry https://registry.npmmirror.com
  ```

  再跑一次 `npm install`

- **如果出现红色 ERR 字样**：把错误信息复制出来，搜索一下，通常是网络问题

装完后，项目根目录会多一个 `node_modules` 文件夹（很大，几百兆），这是正常的。

### 2.5 启动本地预览

在终端里输入：

```
npm run dev
```

回车。终端会显示类似这样：

```
  astro  v4.x.x ready in 500 ms
  ┃ Local    http://localhost:4321/
```

打开浏览器，访问 <http://localhost:4321/> —— **这就是你的网站！**

按 `Ctrl + C` 可以停止。

### 2.6 修改个人信息

现在先不部署，你先改改里面的名字、文字、联系方式：

1. 在 VS Code 左边文件列表里，打开 `src/config.ts`
2. 里面有很多中文注释，告诉你每个地方改什么
3. 特别是这些要改：
   - `SITE.author`（改成你的名字）
   - `SITE.city`（改成你所在的城市）
   - `HOME.intro`（改成你自己的自我介绍）
   - `SAY_HI.contacts`（改成你真实的邮箱和社交账号）
4. 改完保存（`Ctrl + S`）
5. 回到浏览器，页面会自动刷新，你能立刻看到效果

同样，想改首篇示例文章或删掉它：在 `src/content/posts/` 里操作。

改到你满意了，进下一步。

---

<a id="注册-github"></a>
## 3. 注册 GitHub 账号并创建仓库

### 3.1 注册账号

1. 访问 <https://github.com/>
2. 点右上角 "Sign up"
3. 填邮箱、密码、用户名
   - **用户名很重要**，以后你的网站地址会用到（`用户名.github.io`）
   - 用户名只能用英文字母、数字、横线。比如 `xiaoye2026`、`ai-learner` 都可以
4. 验证一下邮箱
5. 遇到选套餐的页面选 **Free**（免费版）

### 3.2 创建仓库

登录后：

1. 点右上角头像旁边的 `+` 图标 → "New repository"
2. 仓库名（Repository name）填：

   ```
   你的用户名.github.io
   ```

   比如你用户名叫 `xiaoye2026`，就填 `xiaoye2026.github.io`

   **注意**：必须严格按这个格式，才能用 `用户名.github.io` 这种好记的地址。

3. **设置为 Public（公开）** —— 免费版的 GitHub Pages 需要仓库公开
4. **不要**勾选 "Add a README file"（因为我们项目里已经有了）
5. 点"Create repository"

页面会显示一些命令，先别管，回到下一步。

---

<a id="推送到-github"></a>
## 4. 把项目推送到 GitHub

### 4.1 改一下项目配置

在 VS Code 里打开 `astro.config.mjs`，找到：

```js
site: 'https://YOUR_USERNAME.github.io',
```

把 `YOUR_USERNAME` 改成你的 GitHub 用户名。比如：

```js
site: 'https://xiaoye2026.github.io',
```

保存。

### 4.2 第一次配置 Git（只需要做一次）

在 VS Code 的终端里：

```
git config --global user.name "你的名字"
git config --global user.email "你的邮箱"
```

邮箱要用你注册 GitHub 的邮箱。

### 4.3 初始化仓库并推送

在终端里依次运行以下命令（**一行一行来，每行回车等它跑完**）：

```
git init
```

```
git add .
```

```
git commit -m "first commit"
```

```
git branch -M main
```

```
git remote add origin https://github.com/你的用户名/你的用户名.github.io.git
```

（把"你的用户名"替换成你真实的 GitHub 用户名，两个地方都要替换）

```
git push -u origin main
```

**此时会弹出登录框**，有两种可能：

**情况 A：弹出浏览器让你授权**

在浏览器里点"Authorize"就行，授权完自动回到命令行，会继续推送。

**情况 B：让你输入用户名密码**

- 用户名：GitHub 用户名
- 密码：**这里不是你的 GitHub 密码！** 要用一个叫"Personal Access Token"的东西

  怎么生成 Token：
  1. 浏览器登录 GitHub，点右上角头像 → Settings
  2. 最下面 Developer settings → Personal access tokens → Tokens (classic)
  3. Generate new token (classic)
  4. Note 填 "blog deploy"，Expiration 选 "No expiration"
  5. 勾选 `repo` 这一大项（会自动勾全子项）
  6. 页面最下面 Generate token
  7. **立刻复制出来的那一长串字符**（比如 `ghp_xxxxxxxxxxxx`），这就是你的密码。页面关掉就再也看不到了，复制丢了就只能重新生成

  回到命令行，粘贴这个 token 作为密码（粘贴后看不到，是正常的，直接回车）

推送成功后，刷新你的 GitHub 仓库页面，会看到所有文件都上去了 ✓

---

<a id="配置自动部署"></a>
## 5. 配置 GitHub Pages 自动部署

### 5.1 打开 Pages 设置

1. 在你的仓库页面，点顶部的 "Settings"
2. 左边菜单找到 "Pages"
3. **Source** 下拉框选 **"GitHub Actions"**（不是 Deploy from a branch）
4. 保存

### 5.2 等待第一次部署

1. 点仓库顶部的 "Actions"
2. 会看到正在跑的 workflow（黄色圆圈代表进行中）
3. 等 1~3 分钟，变成绿色 ✓ 就是部署成功

### 5.3 访问你的网站

打开浏览器，访问：

```
https://你的用户名.github.io/
```

**你的网站上线了** 🎉

---

<a id="日常更新"></a>
## 6. 以后怎么更新文章

以后每次想发新文章，流程是：

1. 在 VS Code 里打开项目
2. 在 `src/content/posts/` 下创建新的 `.md` 文件，比如 `my-new-post.md`
3. 按现有文章的格式写（顶部的 frontmatter + 正文）
4. 保存
5. 打开 VS Code 终端，运行三条命令：

   ```
   git add .
   git commit -m "add new post"
   git push
   ```

6. 1~3 分钟后，刷新你的网站，新文章就上去了

**本地预览再发布：**

每次写完想先看看效果：

```
npm run dev
```

在浏览器里打开 <http://localhost:4321/> 看。没问题了再用上面的 git 三条命令推送。

---

<a id="常见问题"></a>
## 7. 常见问题

### Q: `npm install` 很慢或失败

国内网络问题。换 npm 源：

```
npm config set registry https://registry.npmmirror.com
npm install
```

### Q: GitHub push 的时候一直让输密码

用 Personal Access Token（见上面 4.3 情况 B）。或者使用 GitHub Desktop 图形化工具：<https://desktop.github.com/>

### Q: Actions 跑失败了（红色叉号）

点进去看红色的步骤，找 "Error" 字样的日志，通常是：
- 某个文件语法错误 → 回去改代码
- 仓库名不对 → 检查 `astro.config.mjs` 的 `site` 配置

### Q: 网站打开是 404

- 等 3~5 分钟再试（第一次部署有延迟）
- 检查仓库名是不是 `用户名.github.io` 这个格式
- 检查 Settings → Pages 的 Source 是不是 "GitHub Actions"

### Q: 网站打开了但样式乱了

检查 `astro.config.mjs`：
- 如果仓库叫 `用户名.github.io`，`base` 应该是 `'/'`
- 如果仓库是别的名字（比如 `my-blog`），`base` 要改成 `'/my-blog/'`

### Q: 想绑定自己的域名

1. 买域名（阿里云、Namecheap 等）
2. 在域名 DNS 设置里加一条 CNAME 记录指向 `你的用户名.github.io`
3. 在 GitHub 仓库 Settings → Pages → Custom domain 填你的域名

详见 GitHub 官方文档：<https://docs.github.com/cn/pages/configuring-a-custom-domain-for-your-github-pages-site>

### Q: 想预览某篇还没写完的文章，又不想发布

在文章的 frontmatter 里加一行：

```yaml
draft: true
```

这样线上不会显示，但本地 `npm run dev` 还是能看到。

---

## 接下来

- 写第一篇属于你自己的文章
- 修改 `src/data/timeline.ts` 添加你的学习时间线事件
- 替换 `src/components/Avatar.astro` 里的 SVG 头像为你喜欢的样子（或放上真人照片）
- 分享你的网站给朋友，等第一封读者来信

祝写作愉快。

— end of guide —
