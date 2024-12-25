import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "node:path"

// https://vitejs.dev/config/
/**
 * @type import('vite').UserConfig
 */
export default defineConfig({
  base: '/react19-demo/',
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    }
  }
})
