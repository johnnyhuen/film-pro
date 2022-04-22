import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'

/**
 * https://vitejs.dev/config/
 * @type {import('vite').UserConfig}
 */
/* export default {
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
    hmr: {
      port: 443,
    }
  }
}
 */
export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls }
    }),

    quasar({
      sassVariables: 'src/css/quasar-variables.sass'
    })
  ]
})