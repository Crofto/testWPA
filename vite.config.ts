import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from "vite-plugin-pwa"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({
    mode: "development",
    base: "/",
    srcDir: "src",
    filename: "service-worker.ts",
    includeAssets: ["/favicon.png"],
    strategies: "injectManifest"
  }),],
})