// src/pods/character/api/character.api.ts

import Axios from 'axios'; // Importamos Axios para realizar peticiones HTTP.
import { CharacterFromApi } from './character.api-model'; 
import { characterMockData } from './character.mock-data'; // Importamos los datos mock.

const rickAndMortyApiUrl = 'https://rickandmortyapi.com/api/character';

/**
 * @description Obtiene el detalle de un personaje por su ID desde la API de Rick & Morty.
 * En esta etapa del laboratorio, esta función devolverá datos mock para simular la API real.
 * Esto permite desarrollar la interfaz de usuario sin depender de la conectividad de red.
 *
 * NOTA PARA EL PROFESOR: Se simula la respuesta de la API externa utilizando 'Promise.resolve'
 * para imitar el comportamiento asíncrono de una llamada real.
 * @param id El ID del personaje a obtener.
 * @returns Una promesa que resuelve con los datos detallados del personaje,
 * siguiendo la interfaz CharacterFromApi.
 */
export const getCharacter = (id: string): Promise<CharacterFromApi> => {
  const character = characterMockData.find(c => c.id.toString() === id);

  if (character) {
    return Promise.resolve(character);
  } else {
    return Promise.reject(new Error('Character not found in mock data'));
  }
};