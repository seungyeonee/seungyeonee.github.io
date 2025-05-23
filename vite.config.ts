import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/", // 기본값 설정
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // `@`를 `src` 폴더로 매핑
    },
  },
})
