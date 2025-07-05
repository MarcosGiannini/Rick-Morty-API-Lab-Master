// src/scenes/character.scene.tsx

import * as React from 'react';
// Corregimos los alias
import { AppLayout } from '@/layouts';
import { CharacterContainer } from '@/pods/character';

export const CharacterScene: React.FC = () => (
  <AppLayout>
    <CharacterContainer />
  </AppLayout>
);