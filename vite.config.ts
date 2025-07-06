// vite.config.ts

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 8080,
    open: true,
    // 👇 AÑADE ESTA SECCIÓN
    proxy: {
      // Cualquier petición que empiece por '/api'
      '/api': {
        // Se la redirigimos a nuestro servidor local
        target: 'http://localhost:3001',
        // Necesario para que el servidor de destino reciba bien la petición
        changeOrigin: true,
      },
    },
  },
});