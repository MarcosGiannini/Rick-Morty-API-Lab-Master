// src/scenes/character-collection.scene.tsx

import * as React from 'react';
// Usamos nuestro alias @ para que las rutas funcionen
import { AppLayout } from '@/layouts';
import { CharacterCollectionContainer } from '@/pods/character-collection';

export const CharacterCollectionScene: React.FC = () => (
  <AppLayout>
    <CharacterCollectionContainer />
  </AppLayout>
);