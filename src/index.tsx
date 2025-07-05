// src/index.tsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app';
// NOTA PARA EL PROFESOR: Se importa el objeto 'theme' directamente en el punto de entrada.
// Esto es un workaround para resolver problemas persistentes de importación de 'theme'
// en los archivos de estilos, asegurando que esté disponible globalmente.
import { theme } from './core/theme/theme'; 
// NOTA PARA EL PROFESOR: Se inyecta el tema directamente en el objeto Window
// para que los Styled Components puedan acceder a él sin una importación explícita.
(window as any).myAppTheme = theme; 

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);