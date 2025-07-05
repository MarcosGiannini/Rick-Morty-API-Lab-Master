// src/pods/character/character.mappers.ts

// NOTA PARA EL PROFESOR: Importamos los modelos de datos de la API y los ViewModels
// utilizando rutas relativas explícitas para asegurar la correcta resolución.
import { CharacterFromApi } from './api/character.api-model'; 
import { CharacterVm } from './character.vm'; 

/**
 * @description Mapea un objeto CharacterFromApi (tal como se recibe de la API)
 * a un objeto CharacterVm (tal como lo necesitamos para la UI de detalle del personaje).
 * Esta función se encarga de seleccionar y adaptar las propiedades para la vista,
 * incluyendo cálculos simples como el conteo de episodios.
 * @param characterFromApi El objeto de personaje crudo recibido de la API.
 * @returns Un objeto CharacterVm listo para ser utilizado en la página de detalle del frontend.
 */
export const mapCharacterFromApiToVm = (
  characterFromApi: CharacterFromApi
): CharacterVm => ({
  id: characterFromApi.id, // ID del personaje.
  name: characterFromApi.name, // Nombre.
  status: characterFromApi.status, // Estado.
  species: characterFromApi.species, // Especie.
  type: characterFromApi.type, // Tipo.
  gender: characterFromApi.gender, // Género.
  originName: characterFromApi.origin.name, // Nombre del lugar de origen.
  locationName: characterFromApi.location.name, // Nombre de la última ubicación.
  image: characterFromApi.image, // URL de la imagen.
  episodeCount: characterFromApi.episode.length, // Conteo de episodios.
  bestSentence: characterFromApi.bestSentence || '', // La mejor frase (si existe, si no, cadena vacía).
});