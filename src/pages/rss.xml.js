import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE } from '../config';

export async function GET(context) {
  const posts = await getCollection('posts', ({ data }) => !data.draft);
  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site,
    items: posts
      .sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
      .map(post => ({
        title: post.data.title,
        pubDate: post.data.date,
        description: post.data.note ?? '',
        link: `/writing/${post.slug}/`,
      })),
  });
}
