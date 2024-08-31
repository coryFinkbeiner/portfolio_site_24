import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'), // Create an alias for the 'src' directory
    },
  },
  build: {
    outDir: 'dist', // Specify the output directory for built files
    minify: true, // Enable minification for production builds
  },
})