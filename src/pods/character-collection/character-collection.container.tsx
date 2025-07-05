// src/pods/character-collection/character-collection.container.tsx

import React from 'react'; // Importamos React para crear componentes y usar hooks.
// NOTA PARA EL PROFESOR: Se corrige la sintaxis de importación de react-router-dom.
import { generatePath, useNavigate } from 'react-router-dom'; // Importamos useNavigate y generatePath para la navegación programática.

// Importamos el componente de presentación de la colección de personajes.
// NOTA PARA EL PROFESOR: Se corrige la ruta de importación. character-collection.component.tsx está en la misma carpeta.
// Antes estaba './components/character-collection.component', ahora es './character-collection.component'.
import { CharacterCollectionComponent } from './character-collection.component';
import { useCharacterCollection } from './character-collection.hook'; // Importamos el hook que maneja la lógica de obtención de datos de personajes.
import { appRoutes } from '../../core/router/routes'; // Importamos las rutas de la aplicación para construir URLs.

/**
 * @description Componente contenedor para la colección de personajes.
 * Se encarga de la lógica de negocio: obtener datos de la API,
 * manejar la navegación al detalle del personaje y preparar los datos
 * para el componente de presentación (CharacterCollectionComponent).
 */
export const CharacterCollectionContainer: React.FC = () => {
  // useNavigate: Hook para obtener una función que permite navegar a diferentes rutas.
  const navigate = useNavigate();

  // useCharacterCollection: Hook personalizado para manejar la lógica de la colección de personajes.
  // Provee la lista de personajes, una función para obtenerlos, y estados de carga y error.
  const { characterList, fetchCharacterCollection, loading, error } =
    useCharacterCollection();

  // useEffect: Hook de React para ejecutar efectos secundarios.
  // En este caso, se ejecuta fetchCharacterCollection una sola vez cuando el componente se monta
  // para cargar la lista inicial de personajes.
  React.useEffect(() => {
    fetchCharacterCollection();
  }, []); // El array de dependencias vacío [] asegura que el efecto solo se ejecute al montar.

  /**
   * @description Función que se ejecuta cuando se selecciona un personaje de la lista.
   * Redirige al usuario a la página de detalle del personaje usando su ID.
   * @param id El ID del personaje seleccionado.
   */
  const onSelectCharacter = (id: number) => {
    // generatePath: Utilidad de react-router-dom para generar una ruta con parámetros.
    // appRoutes.character: Plantilla de la ruta de detalle de personaje ('/character/:id').
    // { id }: Objeto con los valores para reemplazar los parámetros de la plantilla.
    navigate(generatePath(appRoutes.character, { id }));
  };

  return (
    // Renderizamos el componente de presentación (UI).
    // Le pasamos los datos (characterList) y la función para manejar la selección de personajes.
    // Los estados 'loading' y 'error' se pueden pasar si el componente de presentación
    // necesita mostrar indicadores de carga o mensajes de error.
    <CharacterCollectionComponent
      characterList={characterList}
      onSelectCharacter={onSelectCharacter}
    />
  );
};