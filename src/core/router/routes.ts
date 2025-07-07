// src/core/router/routes.ts

import { generatePath } from 'react-router-dom';

interface SwitchRoutes {
  root: string;
  characterCollection: string;
  character: string;
  locationCollection: string;
  // 👇 AÑADIMOS ESTA LÍNEA
  episodes: string; 
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  characterCollection: '/characters',
  character: '/character/:id',
  locationCollection: '/locations',
  // 👇 AÑADIMOS ESTA LÍNEA
  episodes: '/episodes',
};