import { defineConfig } from 'vite'
import path, { resolve } from 'node:path'

const isGitHubPages = true
const folderName = `${path.basename(process.cwd())}/`
const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development'
const base = mode === 'production' && isGitHubPages ? `/${folderName}` : '/'

export default defineConfig({
  root: 'src',
  base,
  mode,
  envDir: '../',
  publicDir: '../public',
  resolve: {
    alias: {
      '@': new URL('./src', import.meta.url).pathname
    }
  },
  build: {
    outDir: '../dist',
    assetsDir: './',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        about: resolve(__dirname, 'src/comentarios.html')
      }
    }
  }
})
