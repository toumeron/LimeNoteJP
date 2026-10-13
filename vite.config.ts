import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  base: "/LimeNoteJP/",
  server: {
    host: "127.0.0.1",
    proxy: {
      "/RaimuNoteSNS.github.io/": { target: "http://127.0.0.1:8080", ws: true },
    },
  },
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
