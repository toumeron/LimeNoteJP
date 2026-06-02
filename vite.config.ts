import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // ここに base を書くのは間違い。vite プロパティの中に移動させる
  
  tanstackStart: {
    server: { entry: "server" },
  },
  
  vite: {
    // 修正: base はここに入れる
    base: 'LimeNoteJP/', 
    
    build: {
      ssr: false,
    }
  }
});