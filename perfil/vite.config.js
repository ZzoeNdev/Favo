import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/perfil/',
    server:{
  proxy:{
    '/api': {
      target: 'https://favo.alwaysdata.net',
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/,''),
    },
  },
},
})
