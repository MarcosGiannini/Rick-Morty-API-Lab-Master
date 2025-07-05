// src/pods/character-collection/api/character-collection.api.ts

import Axios from 'axios';
import { CharacterCollectionFromApi } from './character-collection.api-model';

// Definimos la URL de la API de Rick & Morty para obtener la lista de personajes.
const rickAndMortyApiUrl = 'https://rickandmortyapi.com/api/character';

/**
 * @description Obtiene la colección de personajes desde la API pública de Rick and Morty.
 * Se utiliza Axios para realizar la petición GET al endpoint correspondiente.
 *
 * NOTA PARA EL PROFESOR: Se reemplaza la implementación mock por una llamada real
 * a la API externa, cumpliendo con la primera parte del Ejercicio 1.
 * @returns Una promesa que resuelve con los datos de la colección de personajes.
 * En caso de error en la petición, la promesa es rechazada.
 */
export const getCharacterCollection = async (): Promise<CharacterCollectionFromApi> => {
  try {
    // Realizamos la petición GET. Axios devuelve la respuesta de la API anidada en la propiedad 'data'.
    const { data } = await Axios.get<CharacterCollectionFromApi>(rickAndMortyApiUrl);
    return data;
  } catch (error) {
    // Es una buena práctica capturar errores de red y lanzarlos para que sean manejados
    // por la lógica superior (en nuestro caso, el hook).
    console.error('Error al obtener la colección de personajes:', error);
    throw error;
  }
};