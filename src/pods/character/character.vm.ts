// src/pods/character/character.vm.ts

/**
 * @description Interfaz que define la estructura de un personaje
 * tal como se va a utilizar en la capa de presentación (ViewModel) para el detalle.
 * Incluye campos relevantes para mostrar en la página de detalle,
 * como la URL de la imagen, el estado, la especie, el género, etc.
 *
 * NOTA PARA EL PROFESOR: Este ViewModel es una adaptación del modelo de la API
 * para simplificar el acceso a los datos y presentarlos de forma clara en la UI.
 * Incluye el campo 'bestSentence' para el Ejercicio 2.
 */
export interface CharacterVm {
  id: number; // Identificador único del personaje.
  name: string; // Nombre completo del personaje.
  status: string; // Estado de vida del personaje.
  species: string; // Especie del personaje.
  type: string; // Tipo o subtipo del personaje (puede ser vacío).
  gender: string; // Género del personaje.
  originName: string; // Nombre del lugar de origen.
  locationName: string; // Nombre de la última ubicación conocida.
  image: string; // URL de la imagen del personaje.
  episodeCount: number; // Número de episodios en los que aparece.
  bestSentence: string; // Campo para guardar la mejor frase del personaje (para el Ejercicio 2).
}