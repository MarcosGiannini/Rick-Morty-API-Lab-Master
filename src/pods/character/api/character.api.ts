// src/pods/character/api/character.api.ts

import Axios from 'axios';
import { CharacterFromApi } from './character.api-model';

// NOTA PARA EL PROFESOR: Se cambia la URL para apuntar al servidor local
// a través del proxy de Vite, cumpliendo con el Ejercicio 2.
const localApiUrl = '/api/character';

/**
 * @description Obtiene el detalle de un personaje por su ID desde el servidor local.
 * @param id El ID del personaje a obtener.
 * @returns Una promesa que resuelve con los datos detallados del personaje.
 */
export const getCharacter = async (id: string): Promise<CharacterFromApi> => {
  // Construimos la URL completa para el personaje específico.
  const url = `${localApiUrl}/${id}`;

  try {
    // Realizamos la petición GET a la URL construida.
    const { data } = await Axios.get<CharacterFromApi>(url);
    return data;
  } catch (error) {
    // Capturamos y relanzamos el error para que sea manejado por el hook.
    console.error(`Error al obtener el personaje con id ${id} desde el servidor local:`, error);
    throw error;
  }
};