// src/pods/character-collection/character-collection.hook.ts

import React from 'react'; // Importamos React para usar hooks como useState y useEffect.
import { getCharacterCollection } from './api/character-collection.api'; // Importamos la función para obtener datos de la API.
import { mapCharacterCollectionFromApiToVm } from './character-collection.mapper'; // Importamos el mapper para transformar los datos de la API a nuestro ViewModel.
import { CharacterCollectionVm } from './character-collection.vm'; // Importamos el ViewModel para tipar los datos.

/**
 * @description Hook personalizado para manejar la lógica de la colección de personajes.
 * Se encarga de:
 * 1. Gestionar el estado de la lista de personajes.
 * 2. Manejar los estados de carga (loading) y error.
 * 3. Realizar la llamada a la API para obtener los datos.
 * 4. Mapear los datos de la API al formato de ViewModel.
 * @returns Un objeto con:
 * - characterList: La lista de personajes lista para ser mostrada en la UI.
 * - loading: Booleano que indica si la carga de datos está en progreso.
 * - error: Mensaje de error si ocurre algún problema durante la carga.
 * - fetchCharacterCollection: Función para iniciar la carga de la colección de personajes.
 */
export const useCharacterCollection = () => {
  // Estado para almacenar la lista de personajes. Inicialmente vacío.
  const [characterList, setCharacterList] = React.useState<CharacterCollectionVm['characterList']>(
    []
  );
  // Estado para indicar si la aplicación está cargando datos. Inicialmente falso.
  const [loading, setLoading] = React.useState(false);
  // Estado para almacenar mensajes de error. Inicialmente vacío.
  const [error, setError] = React.useState('');

  /**
   * @description Función asíncrona para obtener la colección de personajes de la API.
   * Actualiza los estados de carga, error y la lista de personajes.
   */
  const fetchCharacterCollection = async () => {
    setLoading(true); // Ponemos el estado de carga a true al inicio de la petición.
    setError(''); // Limpiamos cualquier error previo.

    try {
      // Llamamos a la API para obtener los datos.
      const characterCollection = await getCharacterCollection();
      // Mapeamos los datos de la API a nuestro ViewModel y actualizamos el estado.
      setCharacterList(mapCharacterCollectionFromApiToVm(characterCollection).characterList);
    } catch (apiError) {
      // Si ocurre un error, lo capturamos y actualizamos el estado de error.
      console.error('Error fetching character collection:', apiError);
      setError('Error al cargar los personajes. Inténtelo de nuevo más tarde.');
    } finally {
      setLoading(false); // Siempre quitamos el estado de carga al finalizar la petición (éxito o error).
    }
  };

  // Retornamos los estados y la función para que el componente contenedor pueda utilizarlos.
  return { characterList, loading, error, fetchCharacterCollection };
};