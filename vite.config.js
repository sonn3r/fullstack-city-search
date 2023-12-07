import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/fullstack-city-search/',
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
})
