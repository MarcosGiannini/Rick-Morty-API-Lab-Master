// src/pods/character/api/character.api-model.ts

/**
 * @description Interfaz que define la estructura de un personaje tal como se recibe de la API externa de Rick & Morty.
 * Esta es la "API Model" que representa la forma cruda de los datos detallados devueltos por la API
 * para un solo personaje. Se incluyen todos los campos relevantes para el detalle.
 *
 * NOTA PARA EL PROFESOR: Esta interfaz es fundamental para tipar la respuesta completa
 * de la API cuando se solicita información detallada de un personaje, incluyendo campos
 * como 'origin', 'location', y 'episode' para futuras extensiones del proyecto.
 */
export interface CharacterFromApi {
  id: number; // Identificador único del personaje.
  name: string; // Nombre completo del personaje.
  status: string; // Estado de vida del personaje (e.g., 'Alive', 'Dead', 'unknown').
  species: string; // Especie a la que pertenece el personaje (e.g., 'Human', 'Alien').
  type: string; // Tipo o subtipo del personaje, si aplica (puede ser vacío).
  gender: string; // Género del personaje (e.g., 'Male', 'Female', 'unknown').
  origin: {
    name: string; // Nombre del lugar de origen del personaje.
    url: string; // URL de la API para obtener más detalles del origen.
  };
  location: {
    name: string; // Nombre de la última ubicación conocida del personaje.
    url: string; // URL de la API para obtener más detalles de la ubicación.
  };
  image: string; // URL de la imagen (foto) del personaje.
  episode: string[]; // Array de URLs de los episodios en los que aparece el personaje.
  url: string; // URL de la API para obtener más detalles del personaje.
  created: string; // Fecha y hora de creación del personaje en la base de datos.
  bestSentence?: string; // Campo adicional para la práctica del Ejercicio 2 (opcional y no presente en la API real).
}