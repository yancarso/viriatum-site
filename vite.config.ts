import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

// Em dev, serve /pagina02 com pagina02.html (em produção quem faz isso é o vercel.json).
const pagina02Dev: Plugin = {
  name: 'pagina02-dev',
  configureServer(server) {
    server.middlewares.use((req, _res, next) => {
      const r = req as { url?: string }
      if (r.url && /^\/pagina02\/?(\?|$)/.test(r.url)) {
        r.url = r.url.replace(/^\/pagina02\/?/, '/pagina02.html')
      }
      next()
    })
  },
}

export default defineConfig({
  plugins: [react(), pagina02Dev],
  server: {
    host: true,
  },
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        pagina02: 'pagina02.html',
      },
    },
  },
})
