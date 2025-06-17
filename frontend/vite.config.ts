import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    port: 3000,
    fs: {
      allow: ['..'] // ⬅️ Required to allow access to ../types
    },
    proxy: {
      '/api': 'http://localhost:5000'  // Adjust if your backend runs on a different port
    }
  }
})
