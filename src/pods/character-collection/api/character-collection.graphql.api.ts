// src/pods/character-collection/api/character-collection.graphql.api.ts

import Axios from 'axios';
// Reutilizamos el modelo de la API REST porque la respuesta es muy similar
import { CharacterCollectionFromApi } from './character-collection.api-model';

// 1. La única URL para TODAS las peticiones GraphQL
const graphqlApiUrl = 'https://rickandmortyapi.com/graphql';

// 2. La query que probamos, pero como un string de JavaScript.
//    Usamos 'query getCharacters($page: Int)' para darle un nombre y definir
//    que aceptará una variable '$page' de tipo entero.
const characterCollectionQuery = `
  query getCharacters($page: Int) {
    characters(page: $page) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        status
        species
        image
      }
    }
  }
`;

// Interfaz para la respuesta de GraphQL, que siempre envuelve los datos en un objeto "data".
interface GraphQLResponse {
  data: {
    characters: CharacterCollectionFromApi;
  };
}

/**
 * @description Obtiene la colección de personajes usando la API de GraphQL.
 * @param page El número de página a obtener.
 * @returns Una promesa que resuelve con la colección de personajes.
 */
export const getCharacterCollectionGraphQL = async (
  page: number = 1
): Promise<CharacterCollectionFromApi> => {
  try {
    // 3. Hacemos una petición POST con Axios.
    // Enviamos la query y un objeto 'variables' con los parámetros.
    const response = await Axios.post<GraphQLResponse>(graphqlApiUrl, {
      query: characterCollectionQuery,
      variables: { page },
    });

    // La respuesta que nos interesa está anidada dentro de data.data.characters
    return response.data.data.characters;
  } catch (error) {
    console.error('Error fetching character collection via GraphQL:', error);
    throw error;
  }
};