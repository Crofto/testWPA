import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from "vite-plugin-pwa"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({
    manifest: {
      name: 'hjhkjhkjh',
      icons: [
        {
          src: "/images/favicon.ico",
          sizes: "64x64 32x32 24x24 16x16",
          type: "image/x-icon"
        },
        {
          src: "/images/logo192.png",
          type: "image/png",
          sizes: "192x192"
        },
        {
          src: "/images/logo512.png",
          type: "image/png",
          sizes: "512x512"
        }
      ]
    }

  }),],
})