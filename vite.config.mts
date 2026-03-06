import { resolve } from 'node:path';

import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
  build: {
    assetsInlineLimit: 0,
  },
  esbuild: {
    minifySyntax: false,
  },
  plugins: [createHtmlPlugin()],
  resolve: {
    alias: {
      src: resolve(__dirname, './src'),
    },
  },
});
