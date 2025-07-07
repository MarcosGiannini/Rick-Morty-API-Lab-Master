// src/pods/character-collection/api/character-collection.api-model.ts

/**
 * @description NOTA PARA EL PROFESOR: Este es el modelo de datos completo que representa 
 * la respuesta de la API para la colección de personajes.
 */

/**
 * @description Describe la estructura de la información de paginación que viene de la API.
 * Se ha modificado para aceptar tanto URLs (string) de la API REST como números de página (number)
 * de la API GraphQL, haciendo el modelo más flexible para los diferentes ejercicios.
 */
export interface Info {
  count: number;
  pages: number;
  next: string | number | null;
  prev: string | number | null;
}

/**
 * @description La forma de un único personaje tal como viene de la API.
 */
export interface CharacterFromApi {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
  // El campo 'bestSentence' es opcional porque solo existe en nuestro servidor mock.
  bestSentence?: string;
}

/**
 * @description La forma de la respuesta completa de la API, que incluye la paginación y los resultados.
 */
export interface CharacterCollectionFromApi {
  info: Info;
  results: CharacterFromApi[];
}