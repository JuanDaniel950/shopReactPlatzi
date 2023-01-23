import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
    { find: "@components", replacement: path.resolve(__dirname, "src/components") },
    { find: "@containers", replacement: path.resolve(__dirname, "src/containers") },
    { find: "@pages", replacement: path.resolve(__dirname, "src/pages") },
    { find: "@icons", replacement: path.resolve(__dirname, "src/assets/icons") }
  ],
  },
  plugins: [react()],
});
