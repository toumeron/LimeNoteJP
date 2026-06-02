import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // ここに base を書いてはいけない（これが型エラーの原因）
  
  tanstackStart: {
    server: false,
  },
  
  vite: {
    // base は必ずこの vite オブジェクトの中に書く
    base: '/LimeNoteJP/',
    
    build: {
      ssr: false,
      outDir: 'dist',
    }
  }
});