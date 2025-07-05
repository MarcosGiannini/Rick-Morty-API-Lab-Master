// src/pods/character/character.container.tsx

import React from 'react';
// 1. Importamos el hook que hemos creado.
import { useCharacter } from './character.hook';
// 2. Importamos el componente de presentación que pintará los datos.
import { CharacterComponent } from './character.component';

/**
 * @description Componente contenedor para la página de detalle de un personaje.
 * Delega toda la lógica al hook 'useCharacter' y pasa los datos resultantes
 * al componente de presentación 'CharacterComponent'.
 *
 * NOTA PARA EL PROFESOR: Se ha refactorizado este contenedor para seguir el
 * patrón de "custom hooks", centralizando la lógica y dejando el contenedor
 * con la única responsabilidad de conectar la lógica con la vista.
 */
export const CharacterContainer: React.FC = () => {
  // 3. ¡Usamos nuestro hook y obtenemos todo lo que necesitamos en una línea!
  const { character, loading, error } = useCharacter();

  // 4. Gestionamos los estados de carga y error.
  if (loading) {
    // NOTA: Podríamos crear un componente 'Spinner' más elegante en el futuro.
    return <p>Cargando personaje...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  // 5. Si todo ha ido bien, pasamos los datos del personaje al componente de presentación.
  // Si no hay personaje (y no hay carga/error), no devolvemos nada.
  return character ? <CharacterComponent character={character} /> : null;
};