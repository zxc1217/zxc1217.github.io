import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    // 写作动机：散步的时候突然想通的
    note: z.string().optional(),
    // 标签（单标签）
    tag: z.string().default('笔记'),
    // 心情 / 天气："周三，有点冷"
    mood: z.string().optional(),
    // 阅读时间（分钟）
    readTime: z.number().optional(),
    // 草稿默认不显示
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };
