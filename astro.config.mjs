import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // ⚠️ 部署前请把下面两行改成你自己的
  // 格式：https://你的GitHub用户名.github.io
  site: 'https://zxc1217.github.io',
  // 如果仓库名是 "用户名.github.io"，base 留 '/'
  // 如果仓库名是其他名字（比如 "my-blog"），base 改成 '/my-blog/'
  base: '/',
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'rose-pine-dawn',
      wrap: true,
    },
  },
});
