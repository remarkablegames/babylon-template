import { resolve } from 'node:path';

import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
  build: {
    assetsInlineLimit: 0,
    target: 'esnext',
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          babylon: ['@babylonjs/core'],
        },
      },
    },
  },
  plugins: [createHtmlPlugin()],
  resolve: {
    alias: {
      src: resolve(__dirname, './src'),
    },
  },
});
