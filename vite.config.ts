import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import WindiCSS from 'vite-plugin-windicss';
const { resolve } = require('path');
import viteSvgIcons from 'vite-plugin-svg-icons';
import path from 'path';
import { generateModifyVars } from './build/generate/generateModifyVars';
function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: /\/@\//,
        replacement: pathResolve('src') + '/',
      },
      // /#/xxxx => types/xxxx
      {
        find: /\/#\//,
        replacement: pathResolve('types') + '/',
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
  plugins: [vue(), WindiCSS(),viteSvgIcons({
    // Specify the icon folder to be cached
    iconDirs: [path.resolve(process.cwd(), 'src/icons')],
    // Specify symbolId format
    symbolId: 'icon-[dir]-[name]',
  })],

  css: {
    preprocessorOptions: {
      less: {
        modifyVars: generateModifyVars(),
        javascriptEnabled: true,
      },
    },
  },
});
