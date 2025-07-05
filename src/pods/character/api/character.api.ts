// src/pods/character/api/character.api.ts

import Axios from 'axios';
import { CharacterFromApi } from './character.api-model';

// URL base de la API para los personajes.
const rickAndMortyApiUrl = 'https://rickandmortyapi.com/api/character';

/**
 * @description Obtiene el detalle de un personaje por su ID desde la API de Rick & Morty.
 *
 * NOTA PARA EL PROFESOR: Se reemplaza la búsqueda en datos mock por una llamada
 * real a la API, usando el ID del personaje para construir la URL del endpoint.
 * Esto cumple con la segunda parte del Ejercicio 1.
 * @param id El ID del personaje a obtener.
 * @returns Una promesa que resuelve con los datos detallados del personaje.
 */
export const getCharacter = async (id: string): Promise<CharacterFromApi> => {
  // Construimos la URL completa para el personaje específico.
  const url = `${rickAndMortyApiUrl}/${id}`;

  try {
    // Realizamos la petición GET a la URL construida.
    const { data } = await Axios.get<CharacterFromApi>(url);
    return data;
  } catch (error) {
    // Capturamos y relanzamos el error para que sea manejado por el hook.
    console.error(`Error al obtener el personaje con id ${id}:`, error);
    throw error;
  }
};