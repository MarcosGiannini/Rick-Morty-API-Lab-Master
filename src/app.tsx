// src/app.tsx

import React from 'react';
import { Router } from './core/router/router.component'; 
// NOTA PARA EL PROFESOR: Se utiliza la importación desde el 'index.ts' de 'core/theme'
// que ahora exporta directamente ThemeProviderComponent para resolver el error recurrente.
import { ThemeProviderComponent } from './core/theme'; 

/**
 * @description Componente raíz de la aplicación.
 * Este componente es el punto de entrada principal donde se configuran
 * los proveedores de contexto globales (como el tema) y el enrutador.
 */
export const App: React.FC = () => {
  return (
    <ThemeProviderComponent>
      <Router />
    </ThemeProviderComponent>
  );
};