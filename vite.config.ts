import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import WindiCSS from 'vite-plugin-windicss';
const { resolve } = require('path');
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      // /@/xxxx => src/xxxx
      {
        find: /\/@\//,
        replacement: resolve('src') + '/',
      },
      // /#/xxxx => types/xxxx
      {
        find: /\/#\//,
        replacement: resolve('types') + '/',
      },
    ],
  },
  /*build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/pages/single/index.html'),
      },
    },
  },*/
  plugins: [vue(), WindiCSS()],
});
