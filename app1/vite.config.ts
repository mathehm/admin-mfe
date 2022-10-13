import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from "@originjs/vite-plugin-federation"

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8081
  },
  plugins: [
    vue(),
    federation({
      name: 'app1',
      filename: 'remoteEntry.js',
      // Modules to expose
      exposes: {
        './Hello': './src/components/HelloWorld.vue',
        './Welcome': './src/components/TheWelcome.vue'
      },
      shared: ['vue', 'pinia']
  })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    minify: false,
    target: ["chrome89", "edge89", "firefox89", "safari15"]
 }
})
