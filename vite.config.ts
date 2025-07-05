// vite.config.ts

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url'; // ¡Lo volvemos a necesitar!

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // ✨ Aquí definimos nuestro alias principal.
      // '@' ahora será un atajo para la carpeta 'src'.
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 8080,
    open: true,
  },
});