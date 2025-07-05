// src/pods/character/character.container.tsx

import React from 'react'; // Importamos React para crear componentes y usar hooks.
import { useParams } from 'react-router-dom'; // Importamos useParams para obtener parámetros de la URL.
// NOTA PARA EL PROFESOR: Se utilizan rutas relativas explícitas para las importaciones.
import { getCharacter } from './api/character.api'; // Importamos la función para obtener el detalle del personaje.
import { mapCharacterFromApiToVm } from './character.mappers'; // Importamos el mapper para transformar los datos de la API a nuestro ViewModel.
import { CharacterVm } from './character.vm'; // Importamos el ViewModel para tipar los datos.

/**
 * @description Componente contenedor para la página de detalle de un personaje.
 * Se encarga de la lógica de negocio: obtener el ID del personaje de la URL,
 * llamar a la API para obtener sus datos, manejar los estados de carga y error,
 * y preparar los datos para el componente de presentación (CharacterComponent).
 *
 * NOTA PARA EL PROFESOR: Este contenedor es crucial para la implementación
 * de la segunda llamada a la API y el manejo de un solo recurso.
 */
export const CharacterContainer: React.FC = () => {
  // Obtenemos el parámetro 'id' de la URL.
  const { id } = useParams();
  // Estado para almacenar los datos del personaje.
  const [character, setCharacter] = React.useState<CharacterVm>();
  // Estado para indicar si la aplicación está cargando datos.
  const [loading, setLoading] = React.useState(false);
  // Estado para almacenar mensajes de error.
  const [error, setError] = React.useState('');

  // useEffect: Hook para cargar el personaje cuando el componente se monta o el ID cambia.
  React.useEffect(() => {
    if (id) { // Solo si tenemos un ID válido.
      setLoading(true); // Ponemos el estado de carga a true.
      setError(''); // Limpiamos errores previos.

      getCharacter(id) // Llamamos a la API con el ID.
        .then(apiCharacter => {
          // Mapeamos los datos de la API a nuestro ViewModel.
          setCharacter(mapCharacterFromApiToVm(apiCharacter));
        })
        .catch(apiError => {
          console.error('Error fetching character:', apiError);
          setError('Error al cargar el personaje. Inténtelo de nuevo.');
        })
        .finally(() => {
          setLoading(false); // Siempre quitamos el estado de carga al finalizar.
        });
    }
  }, [id]); // Se ejecuta cuando el 'id' cambia.

  // NOTA PARA EL PROFESOR: Aquí se renderizaría el CharacterComponent
  // con los datos del personaje, y se gestionarían los estados de 'loading' y 'error'.
  // Por ahora, solo mostramos los datos crudos o mensajes.
  return (
    <div>
      {loading && <p>Cargando personaje...</p>}
      {error && <p>{error}</p>}
      {character ? (
        <>
          <h3>{character.name}</h3>
          <p>Status: {character.status}</p>
          <p>Species: {character.species}</p>
          <img src={character.image} alt={character.name} width="200" />
        </>
      ) : (
        !loading && !error && <p>Seleccione un personaje o el personaje no existe.</p>
      )}
    </div>
  );
};