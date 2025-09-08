import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  // GitHub Pages base path - can be configured via environment variable
  base: process.env.GITHUB_PAGES_BASE || '/',
  build: {
    // Generate 404.html for Vue Router support on GitHub Pages
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
})
