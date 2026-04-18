// ========================================================
//  🎨 全站配置 —— 改这一个文件就能定制你的网站
// ========================================================
//  所有个人信息、文案、联系方式都在这里
//  改完保存，npm run dev 就能看到效果
// ========================================================

export const SITE = {
  // 网站标题（浏览器标签、RSS 里显示）
  title: 'Field notes, on learning AI',

  // 网站描述（SEO）
  description: '一个普通人学习 AI 的诚实记录。',

  // 你的名字 / 昵称（会出现在签名、页脚、say hi 页）
  author: 'ZXC',

  // 你所在的城市（页脚 "made by a human in XXX"）
  city: 'Seattle',

  // 首页 Logo 文字（左上角）
  logo: 'Field notes, on learning AI',
};

// ========================================================
//  首页 — 自我介绍
// ========================================================
export const HOME = {
  // hero 主标题，用 \n 换行，斜体用 <em>包裹</em>
  titleLine1: '<em>一个</em>正在',
  // "假装"会被划掉 — 你想换成别的词就换
  titleStrikeWord: '假装',
  titleLine2: '学习 AI 的人',

  // 正文介绍（可以写多段，每段一个字符串）
  intro: [
    '这一只小白随便搭建的网站，记录我追逐AI世界过程中的所思所想，所学所得。我将所有的笨拙的思考，所走的每一步——无论是否是弯路，都如实的记录在这里，能帮上你就太好了',
  ],

  // 最近在干嘛
  nowTopic: 'AIGC',
  nowDetail: '',
  nowUpdated: '2026-4-18',

  // 标签筛选区引导语
  tagIntro: '我写过的东西，大致是关于这些的 ——',
  tagHint: '看看都写了什么',
};

// ========================================================
//  say hi 页
// ========================================================
export const SAY_HI = {
  // 卡片顶部小字
  kicker: '来自互联网的明信片',
  // 卡片主标题（em 是斜体）
  title: '想<em>聊聊</em>吗',

  // 正文（可以写多段）
  body: [
    '如果你读到这里还想找我说点什么 —— <b>我很开心</b>。',
    '我不算活跃的社交媒体用户，但我会认真读每一封写给我的邮件，<span class="soft">哪怕是回复得慢一点。</span>',
    '最欢迎的来信类型：你也在学 AI 的同路人、觉得我某一段写错了的、读完某一篇想到什么了的 —— 这些我都会认真回。',
  ],

  // 平均回复时间（显示为小绿点徽章）
  replyTime: '2–3 天',

  // 联系方式列表 —— 要几个填几个，不要的删掉
  //   label: 左侧提示词（"写封信 →" 这种）
  //   value: 中间显示的值
  //   href:  点击跳转的链接（邮箱用 copy: true）
  //   hint:  悬停时右边显示的小字
  //   copy:  true = 点击复制（不跳转）
  contacts: [
    {
      label: '写封信 →',
      value: 'hello@example.com',
      href: 'mailto:hello@example.com',
      hint: 'copy',
      copy: true,
    },
    {
      label: '看代码 →',
      value: '@your-github',
      href: 'https://github.com/your-github',
      hint: 'github ↗',
      copy: false,
    },
    {
      label: '碎碎念 →',
      value: '@your-handle',
      href: 'https://twitter.com/your-handle',
      hint: 'twitter ↗',
      copy: false,
    },
    {
      label: '订阅 →',
      value: '/rss.xml',
      href: '/rss.xml',
      hint: 'rss ↗',
      copy: false,
    },
  ],

  // P.S. 循环的句子 —— 点击会切换下一句
  ps: [
    '如果你已经写到一半又犹豫要不要发，其实，发吧。',
    '不用开头想很久的问候语，直接说事就好。',
    '我不是专家，所以你问的问题越具体越好。',
    '如果我半个月没回你，不是不想回，是真的在忙。再发一次提醒我。',
    '邮件的主题行随便写什么都行，真的。',
    '如果你读到了这里，谢谢你 —— 你是这个网站上少数的朋友之一。',
  ],

  // 卡片右上角邮戳
  stampYear: '2026',
};

// ========================================================
//  导航菜单
// ========================================================
export const NAV = [
  { name: 'homepage', href: '/' },
  { name: 'writing', href: '/writing/' },
  { name: 'timeline', href: '/timeline/' },
  { name: 'say hi', href: '/say-hi/' },
];
