import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'node:path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import AutoImport from "unplugin-auto-import/vite"

//自动导入ui-组件 比如说ant-design-vue  element-plus等
import Components from 'unplugin-vue-components/vite';
//ant-design-vue
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    AutoImport({
      include: [/\.[jt]sx?$/, /\.vue\??/, /\.nvue\??/],
      imports: ['vue', 'uni-app', 'pinia'],
      dts: true,
      dirs: [
        resolve(__dirname, 'apis/**'),
        resolve(__dirname, 'enum/**'),
        resolve(__dirname, 'store/**'),
        resolve(__dirname, 'utils/**'),
      ],
    }),
    Components({
      //ant-design-vue   importStyle = false 样式就没了
      resolvers: [AntDesignVueResolver({ importStyle: true, resolveIcons: true })],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
