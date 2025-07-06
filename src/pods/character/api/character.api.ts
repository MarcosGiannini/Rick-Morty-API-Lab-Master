// src/pods/character/api/character.api.ts

import Axios from 'axios';
import { CharacterFromApi } from './character.api-model';

const localApiUrl = '/api/character';

/**
 * @description Obtiene el detalle de un personaje por su ID desde el servidor local.
 * @param id El ID del personaje a obtener.
 * @returns Una promesa que resuelve con los datos detallados del personaje.
 */
export const getCharacter = async (id: string): Promise<CharacterFromApi> => {
  const url = `${localApiUrl}/${id}`;
  try {
    const { data } = await Axios.get<CharacterFromApi>(url);
    return data;
  } catch (error) {
    console.error(`Error al obtener el personaje con id ${id} desde el servidor local:`, error);
    throw error;
  }
};

/**
 * @description Actualiza la información de un personaje en el servidor local.
 *
 * NOTA PARA EL PROFESOR: Se añade esta función para cumplir con la parte de
 * escritura del Ejercicio 2, utilizando el método PUT del servidor mock.
 * @param id El ID del personaje a actualizar.
 * @param characterInfo Un objeto que contiene el campo 'bestSentence' actualizado.
 * @returns Una promesa que resuelve (con void) cuando la operación se completa.
 */
export const updateCharacter = async (
  id: string,
  characterInfo: { bestSentence: string }
): Promise<void> => {
  const url = `${localApiUrl}/${id}`;
  try {
    // Realizamos la petición PUT, enviando los nuevos datos en el cuerpo de la petición.
    await Axios.put(url, characterInfo);
  } catch (error) {
    console.error(`Error al actualizar el personaje con id ${id}:`, error);
    throw error;
  }
};