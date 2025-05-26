import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/seungyeonee.github.io/",
  plugins: [react()],
  build: {
    outDir: "dist", // 빌드 결과물이 저장될 폴더
    emptyOutDir: true, // 기존 파일 제거 후 새로 빌드
  },
  resolve: {
    alias: {
      pages: "/src/pages",
      components: "/src/components",
    },
  },
});
