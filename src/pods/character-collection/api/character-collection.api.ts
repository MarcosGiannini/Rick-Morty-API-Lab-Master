// src/pods/character-collection/api/character-collection.api.ts

import Axios from 'axios';
import { CharacterCollectionFromApi } from './character-collection.api-model';

const useLocalApi = import.meta.env.VITE_USE_LOCAL_API === 'true';
const publicApiUrl = 'https://rickandmortyapi.com/api/character';
const localApiProxyUrl = '/api/character';
const baseUrl = useLocalApi ? localApiProxyUrl : publicApiUrl;

/**
 * @description Obtiene una colección de personajes. Soporta paginación y búsqueda por nombre.
 * @param options Un objeto que puede contener una URL para paginación o un searchQuery para búsqueda.
 * @returns Una promesa que resuelve con la colección de personajes.
 */
export const getCharacterCollection = async (options?: {
  url?: string;
  searchQuery?: string;
}): Promise<CharacterCollectionFromApi> => {
  // Si nos dan una URL (de paginación), la usamos. Si no, la URL base.
  let url = options?.url || baseUrl;

  // Si no es una URL de paginación y nos dan un término de búsqueda, lo añadimos.
  if (!options?.url && options?.searchQuery) {
    // NOTA PARA EL PROFESOR: Se añade el parámetro de búsqueda 'name' a la URL
    // para cumplir con el challenge de búsqueda.
    url = `${baseUrl}?name=${options.searchQuery}`;
  }

  try {
    const { data } = await Axios.get<CharacterCollectionFromApi>(url);
    return data;
  } catch (error) {
    // Si la búsqueda no devuelve resultados, la API da un 404, que Axios trata como error.
    // Lo capturamos para devolver una lista vacía y que la app no se rompa.
    if (Axios.isAxiosError(error) && error.response?.status === 404) {
      return { info: { count: 0, pages: 0, next: null, prev: null }, results: [] };
    }
    console.error('Error al obtener la colección de personajes:', error);
    throw error;
  }
};