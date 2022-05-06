import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const path = require('path')

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve('src')
    }
  },
  server: {
    host: '0.0.0.0',
    open: true,
    port: 3000,
    proxy: {
      '/socket.io': {
        target: 'ws://192.168.2.74:8080',
        ws: true
      }
    }
  }
})
