import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from "@originjs/vite-plugin-federation"

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8080
  },
  plugins: [
    vue(),
    federation({
      name: 'nav',
      remotes:{
        'app1': 'https://admin-mfe-app1.vercel.app/assets/remoteEntry.js',
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
