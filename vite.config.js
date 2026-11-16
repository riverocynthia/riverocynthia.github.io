import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'

const page = (path) => fileURLToPath(new URL(path, import.meta.url))

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    rollupOptions: {
      input: {
        main: page('./index.html'),
        cobros: page('./casos/cobros-presencial/index.html'),
        designSystem: page('./casos/design-system/index.html'),
      },
    },
  },
})
