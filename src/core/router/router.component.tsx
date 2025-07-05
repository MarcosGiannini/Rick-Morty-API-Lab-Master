// src/core/router/router.component.tsx

import React from 'react'; // Importamos React para crear componentes.
import { HashRouter, Routes, Route } from 'react-router-dom'; // Importamos componentes de React Router para la navegación.
import { appRoutes } from './routes'; // Importamos las rutas de la aplicación que definimos.

// NOTA PARA EL PROFESOR: Se corrige la ruta de importación de las escenas y layouts.
// Se utilizan rutas relativas o desde el index.ts de cada modulo, según la estructura validada.
import { CharacterCollectionScene, CharacterScene } from '../../scenes'; // Importamos las escenas de personajes desde su 'index.ts'.
import { AppLayout } from '../../layouts'; // Importamos el layout principal desde su 'index.ts'.

/**
 * @description Componente principal del enrutador de la aplicación.
 * Utiliza `HashRouter` para la navegación basada en el hash de la URL,
 * lo que es útil para despliegues estáticos.
 * Define las rutas y los componentes que se renderizarán en cada una.
 *
 * NOTA PARA EL PROFESOR: Este componente es clave para la navegación.
 * Demuestra cómo se configuran las rutas con `react-router-dom` y cómo
 * se asocian a componentes de escena específicos, utilizando un layout común.
 */
export const Router: React.FC = () => {
  return (
    <HashRouter> {/* Envuelve toda la aplicación para habilitar el enrutamiento. */}
      {/* AppLayout: Aplica el layout principal a todas las rutas.
          Este componente ya contiene el ThemeProviderComponent internamente. */}
      <AppLayout> 
        <Routes> {/* Contenedor para definir las diferentes rutas. */}
          {/* Ruta para la colección de personajes: se renderiza en la URL raíz. */}
          <Route path={appRoutes.characterCollection} element={<CharacterCollectionScene />} />
          {/* Ruta para el detalle de un personaje: espera un parámetro ':id'. */}
          <Route path={appRoutes.character} element={<CharacterScene />} />
        </Routes>
      </AppLayout>
    </HashRouter>
  );
};