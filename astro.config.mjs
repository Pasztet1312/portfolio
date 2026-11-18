import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://korolczuk.dev',

  server: {
    host: true,
  },

  devToolbar: {
    enabled: false,
  },
});
