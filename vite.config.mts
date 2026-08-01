import { resolve } from 'node:path';

import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
  build: {
    assetsInlineLimit: 0,
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            {
              name: 'babylon',
              test: /node_modules[\\/]@babylonjs[\\/]core/,
            },
          ],
        },
      },
    },
  },

  plugins: [createHtmlPlugin()],

  resolve: {
    alias: {
      src: resolve(import.meta.dirname, './src'),
    },
  },
});
