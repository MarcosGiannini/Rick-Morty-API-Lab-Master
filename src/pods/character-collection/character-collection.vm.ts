// src/pods/character-collection/character-collection.vm.ts

/**
 * @description Interfaz que define la estructura de un personaje
 * tal como se va a utilizar en la capa de presentación (ViewModel).
 * Es una versión simplificada y adaptada de 'CharacterFromApi',
 * conteniendo solo los campos que el componente necesita para renderizar la lista.
 */
export interface CharacterVm {
  id: number; // Identificador único del personaje.
  name: string; // Nombre del personaje.
  image: string; // URL de la imagen del personaje.
  status: string; // Estado de vida del personaje.
  species: string; // Especie del personaje.
}

/**
 * @description Interfaz que define la estructura del ViewModel
 * para la colección completa de personajes.
 * Incluye la lista de 'CharacterVm' que se mostrará en el componente
 * CharacterCollectionComponent.
 */
export interface CharacterCollectionVm {
  characterList: CharacterVm[]; // Array de personajes adaptados para la vista.
}