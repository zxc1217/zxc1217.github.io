import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://zxc1217.github.io',
  base: '/',
  markdown: {
    shikiConfig: {
      theme: 'rose-pine-dawn',
      wrap: true,
    },
  },
});
