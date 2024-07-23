import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@bg': path.resolve(__dirname, './src/assets/bg'),
      '@icons': path.resolve(__dirname, './src/assets/icons'),
      '@components': path.resolve(__dirname, './src/components'),
      '@subpages': path.resolve(__dirname, './src/subpages'),
    }
  }
})
