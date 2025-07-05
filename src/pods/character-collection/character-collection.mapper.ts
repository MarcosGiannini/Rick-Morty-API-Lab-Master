// src/pods/character-collection/character-collection.mapper.ts

// Importamos los modelos de datos que vienen de la API de Rick & Morty.
import { CharacterFromApi } from './api/character-collection.api-model';

// Importamos los ViewModels (modelos de vista) que hemos definido para nuestra aplicación.
import { CharacterCollectionVm, CharacterVm } from './character-collection.vm';

/**
 * @description Mapea un objeto CharacterFromApi (tal como viene de la API)
 * a un objeto CharacterVm (tal como lo necesitamos para la UI de la lista).
 * Esta función se encarga de seleccionar y renombrar propiedades si es necesario,
 * asegurando que el componente de presentación reciba solo los datos relevantes y con el formato esperado.
 * @param characterFromApi El objeto de personaje crudo recibido de la API.
 * @returns Un objeto CharacterVm listo para ser utilizado en el frontend.
 */
export const mapCharacterFromApiToVm = (
  characterFromApi: CharacterFromApi
): CharacterVm => ({
  id: characterFromApi.id, // Mapeamos el ID directamente.
  name: characterFromApi.name, // Mapeamos el nombre.
  image: characterFromApi.image, // Mapeamos la URL de la imagen.
  status: characterFromApi.status, // Mapeamos el estado (e.g., 'Alive', 'Dead').
  species: characterFromApi.species, // Mapeamos la especie (e.g., 'Human', 'Alien').
});

/**
 * @description Mapea un array de CharacterFromApi a un objeto CharacterCollectionVm.
 * Recibe la respuesta completa de la API para la colección y la transforma
 * en el ViewModel que el componente CharacterCollectionComponent espera.
 * Utiliza 'mapCharacterFromApiToVm' para transformar cada personaje individualmente.
 * @param characterCollectionFromApi El objeto de colección de personajes recibido de la API.
 * @returns Un objeto CharacterCollectionVm con la lista de personajes mapeados.
 */
export const mapCharacterCollectionFromApiToVm = (
  characterCollectionFromApi: { results: CharacterFromApi[] } // Esperamos un objeto con una propiedad 'results' que es un array de CharacterFromApi
): CharacterCollectionVm => ({
  characterList: characterCollectionFromApi.results.map(mapCharacterFromApiToVm), // Mapeamos cada personaje dentro del array 'results'.
});