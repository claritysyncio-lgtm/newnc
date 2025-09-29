
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync } from 'fs'
import { resolve } from 'path'

/**
 * Vite Configuration
 * 
 * This configuration sets up the build system for the Notion Notification Center.
 * It includes React support, development server settings, and build optimizations.
 */
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist'
  }
})
