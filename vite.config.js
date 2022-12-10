// vite.config.js
import { resolve } from 'path'
import { defineConfig, optimizeDeps } from 'vite'
import { Script } from 'vm'

export default defineConfig({
  build: {
    rollupOptions: {
        input: {
          mainPage: resolve(__dirname, 'index.html')
        }
    }

  }
})
