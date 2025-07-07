import Axios from 'axios';
import { CharacterFromApi } from './character.api-model';

// Leemos la misma variable de entorno
const useLocalApi = import.meta.env.VITE_USE_LOCAL_API === 'true';

// Definimos ambas URLs
const publicApiUrl = 'https://rickandmortyapi.com/api/character';
const localApiProxyUrl = '/api/character';

const baseUrl = useLocalApi ? localApiProxyUrl : publicApiUrl;

export const getCharacter = async (id: string): Promise<CharacterFromApi> => {
  // Construimos la URL completa para el personaje específico.
  const url = `${baseUrl}/${id}`;
  try {
    const { data } = await Axios.get<CharacterFromApi>(url);
    return data;
  } catch (error) {
    console.error(`Error al obtener el personaje con id ${id}:`, error);
    throw error;
  }
};

// La función de actualizar siempre irá al servidor local
export const updateCharacter = async (
  id: string,
  characterInfo: { bestSentence: string }
): Promise<void> => {
  const url = `${localApiProxyUrl}/${id}`; // Esta siempre usa la ruta del proxy
  try {
    await Axios.put(url, characterInfo);
  } catch (error) {
    console.error(`Error al actualizar el personaje con id ${id}:`, error);
    throw error;
  }
};