import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from "@vitejs/plugin-vue-jsx";

import path from 'path'
 
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),vueJsx()],
  define: {
    'process.env': process.env,
  },
  
  css: {
    preprocessorOptions: {
      less: {
        // 支持 LESS 全局变量文件
        additionalData: `@import "@/styles/variables.less";`
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})