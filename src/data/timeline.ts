// ========================================================
//  📅 时间线数据 —— 想加新事件，在这里加一行
// ========================================================
//  type 可选：
//    'read'  — 蓝色 ● 读论文
//    'done'  — 绿色 ✓ 做完项目
//    'aha'   — 橘色 ✦ 顿悟时刻（会高亮）
//    'start' — 棕色 ◇ 开始学某主题
//    'book'  — 粉色 ○ 读完一本书
//
//  date: 'YYYY-MM-DD' 格式
//  title 里用 <b>粗体</b> 可以高亮关键词
//  detail 可选，有则点击可展开
//  link 可选，链接到相关文章
// ========================================================

export type TimelineEventType = 'read' | 'done' | 'aha' | 'start' | 'book';

export interface TimelineEvent {
  date: string;          // 过去事件用具体日期 'YYYY-MM-DD'
  type: TimelineEventType;
  title: string;         // 支持 <b>高亮</b>
  detail?: string;       // 点击后展开的详细说明
  link?: string;         // 可选的链接
}

export interface FutureEvent {
  when: string;          // 未来用模糊时间："大概五月" / "今年之内"
  type: TimelineEventType;
  title: string;
}

// === 过去（按日期倒序）===
export const pastEvents: TimelineEvent[] = [
  {
    date: '2026-04-15',
    type: 'aha',
    title: '终于理解了 <b>注意力机制</b> 在做什么',
    detail: '在散步的时候突然想通的。花了三周反复读那篇论文，原来它的本质这么朴素。写了一篇长文记下这个瞬间。',
    link: '/writing/attention-mechanism/',
  },
  {
    date: '2026-04-10',
    type: 'read',
    title: '读完《Attention is All You Need》第四遍',
  },
  {
    date: '2026-04-03',
    type: 'done',
    title: '手写了一个 <b>mini 神经网络</b>，纯 NumPy',
    link: '/writing/minimal-neural-network/',
  },
  {
    date: '2026-03-20',
    type: 'start',
    title: '开始学 <b>Transformer 架构</b>',
  },
  {
    date: '2026-03-08',
    type: 'book',
    title: '读完花书前 4 章 · <em>Deep Learning</em>',
  },
  {
    date: '2025-12-20',
    type: 'start',
    title: '正式开始这个学习日记',
    detail: '决定每周至少写一篇。记录比完美重要。',
  },
];

// === "你在这里"锚点的显示内容 ===
export const youAreHere = {
  label: 'YOU ARE HERE · 你在这里',
  text: '2026 年 4 月，第 12 周',
  arrow: '↓ 以下是我希望去的地方',
};

// === 未来计划 ===
export const futureEvents: FutureEvent[] = [
  {
    when: '大概五月',
    type: 'start',
    title: '啃完《Attention is All You Need》的所有细节',
  },
  {
    when: '希望六月前',
    type: 'done',
    title: '训练出一个能说人话的 mini-GPT',
  },
  {
    when: '今年之内',
    type: 'book',
    title: '读完《Deep Learning》全本 · Goodfellow',
  },
  {
    when: '某个遥远的时刻',
    type: 'start',
    title: '自己写一个能训练的小模型……',
  },
];

// === 页面底部结尾语 ===
export const tailMessage = '— 前路漫漫，慢慢走 —';
