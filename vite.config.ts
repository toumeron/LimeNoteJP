import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // 修正: false ではなく空オブジェクト {} を指定する
    server: {},
  },
  
  vite: {
    base: '/LimeNoteJP/',
    build: {
      ssr: false,
      outDir: 'dist',
    }
  }
});