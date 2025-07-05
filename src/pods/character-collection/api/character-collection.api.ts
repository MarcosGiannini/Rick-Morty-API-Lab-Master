// src/pods/character-collection/api/character-collection.api.ts

import Axios from 'axios'; // Importamos Axios para realizar peticiones HTTP (aunque por ahora usaremos mock).
// NOTA PARA EL PROFESOR: Se utiliza la ruta relativa explícita para el modelo de datos de la API.
import { CharacterCollectionFromApi, CharacterFromApi } from './character-collection.api-model'; 
// NOTA PARA EL PROFESOR: Se utiliza la ruta relativa explícita para los datos mock.
import { characterCollectionMockData } from './character-collection.mock-data'; 

// Definimos la URL base de la API de Rick & Morty.
// Para esta fase inicial de la práctica, vamos a simular el comportamiento de la API
// utilizando los datos mock locales, para facilitar el desarrollo y las pruebas.
// Más adelante, en el Ejercicio 2, apuntaremos a un servidor local real.
const rickAndMortyApiUrl = 'https://rickandmortyapi.com/api/character'; // Esta URL no se usará por ahora.

/**
 * @description Obtiene la colección de personajes.
 * En esta etapa del laboratorio, esta función devuelve datos mock
 * para simular la respuesta de una API real. Esto permite desarrollar
 * la interfaz de usuario sin depender de la conectividad de red.
 *
 * NOTA PARA EL PROFESOR: Se simula la respuesta de la API externa utilizando 'Promise.resolve'
 * para imitar el comportamiento asíncrono de una llamada real, aunque con datos locales.
 * Esto es un paso intermedio antes de conectar con el servidor local del ejercicio 2.
 * @returns Una promesa que resuelve con los datos de la colección de personajes.
 */
export const getCharacterCollection = (): Promise<CharacterCollectionFromApi> => {
  const mockResponse: CharacterCollectionFromApi = {
    info: {
      count: characterCollectionMockData.length, // Número de elementos en nuestros datos mock.
      pages: 1, // Suponemos una sola página para los datos mock.
      next: null, // No hay siguiente página.
      prev: null, // No hay página anterior.
    },
    results: characterCollectionMockData, // Aquí están nuestros personajes mock.
  };

  // Devolvemos una promesa resuelta con los datos mock, imitando una llamada asíncrona.
  return Promise.resolve(mockResponse);
};