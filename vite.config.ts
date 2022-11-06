import { fileURLToPath, URL } from 'node:url';

import { defineConfig, type UserConfigExport } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import './src/components/vue-typer/styles/typer-colors';
                         @import './src/components/vue-typer/styles/caret-animations';`,
      },
    },
  },
}) as UserConfigExport;
