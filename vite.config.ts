import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

// index.html = página nova (src/pagina02). legado.html = página antiga (src/main.tsx),
// que continua servindo /pagina02 e as subpáginas abaixo.
// Em dev isso replica os rewrites do vercel.json.
const LEGADO_ROUTES = /^\/(pagina02|contato|google|obrigado|obrigado_google|politica-de-privacidade)\/?(\?|$)/

const legadoDev: Plugin = {
  name: 'legado-dev',
  configureServer(server) {
    server.middlewares.use((req, _res, next) => {
      const r = req as { url?: string }
      if (r.url && LEGADO_ROUTES.test(r.url)) {
        const q = r.url.indexOf('?')
        r.url = '/legado.html' + (q >= 0 ? r.url.slice(q) : '')
      }
      next()
    })
  },
}

export default defineConfig({
  plugins: [react(), legadoDev],
  server: {
    host: true,
  },
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        legado: 'legado.html',
      },
    },
  },
})
