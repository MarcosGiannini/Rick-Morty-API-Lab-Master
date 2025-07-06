// src/pods/character-collection/api/character-collection.api.ts

import Axios from 'axios';
import { CharacterCollectionFromApi } from './character-collection.api-model';

// 👇 CAMBIO: Ahora usamos una ruta relativa. Vite se encargará del resto.
const localApiUrl = '/api/character';

/**
 * @description Obtiene la colección de personajes desde el servidor local a través del proxy de Vite.
 * @returns Una promesa que resuelve con la colección de personajes del servidor local.
 */
export const getCharacterCollection = async (): Promise<CharacterCollectionFromApi> => {
  try {
    const { data } = await Axios.get<CharacterCollectionFromApi>(localApiUrl);
    return data;
  } catch (error) {
    console.error('Error al obtener la colección de personajes del servidor local:', error);
    throw error;
  }
};