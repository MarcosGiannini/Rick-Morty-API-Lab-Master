// src/core/router/router.component.tsx

import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { switchRoutes } from './routes';

// 1. Importamos la nueva escena de episodios.
import {
  CharacterCollectionScene,
  CharacterScene,
  LocationCollectionScene,
  EpisodesScene, // <-- La añadimos aquí
} from '../../scenes';
import { AppLayout } from '@/layouts';

/**
 * @description Componente principal del enrutador de la aplicación.
 * Asocia las rutas con sus componentes de escena correspondientes.
 */
export const Router: React.FC = () => {
  return (
    <HashRouter>
      <AppLayout>
        <Routes>
          {/* Rutas de Personajes */}
          <Route
            path={switchRoutes.characterCollection}
            element={<CharacterCollectionScene />}
          />
          <Route
            path={switchRoutes.character}
            element={<CharacterScene />}
          />

          {/* Ruta de Lugares */}
          <Route
            path={switchRoutes.locationCollection}
            element={<LocationCollectionScene />}
          />

          {/* 2. NOTA PARA EL PROFESOR: Se añade la ruta para el challenge de Episodios. */}
          <Route
            path={switchRoutes.episodes}
            element={<EpisodesScene />}
          />

          {/* Ruta por defecto que redirige a la colección de personajes */}
          <Route
            path={switchRoutes.root}
            element={<CharacterCollectionScene />}
          />
        </Routes>
      </AppLayout>
    </HashRouter>
  );
};