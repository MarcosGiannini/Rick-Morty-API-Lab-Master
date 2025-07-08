// src/pods/character/api/character.graphql.api.ts

import Axios from 'axios';
import { CharacterFromApi } from './character.api-model';

const graphqlApiUrl = 'https://rickandmortyapi.com/graphql';

// La query que acabamos de probar en el Playground.
const characterDetailQuery = `
  query getCharacterDetail($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      type
      gender
      origin {
        name
      }
      location {
        name
      }
      image
      episode {
        id
      }
    }
  }
`;
// Se ha eliminado el campo 'bestSentence' de la query, ya que no existe en la API pública de GraphQL.

// Interfaz para la respuesta de GraphQL, que anida el personaje.
interface GraphQLResponse {
  data: {
    character: CharacterFromApi;
  };
}

/**
 * @description Obtiene el detalle de un personaje usando la API de GraphQL.
 * @param id El ID del personaje a obtener.
 * @returns Una promesa que resuelve con los datos del personaje.
 */
export const getCharacterGraphQL = async (
  id: string
): Promise<CharacterFromApi> => {
  try {
    const response = await Axios.post<GraphQLResponse>(graphqlApiUrl, {
      query: characterDetailQuery,
      variables: { id },
    });
    
    return response.data.data.character;
  } catch (error) {
    console.error(`Error fetching character ${id} via GraphQL:`, error);
    throw error;
  }
};