import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages: https://pasztet1312.github.io/portfolio/
  site: 'https://pasztet1312.github.io',
  base: '/portfolio',

  server: {
    host: true,
  },

  devToolbar: {
    enabled: false,
  },
});
