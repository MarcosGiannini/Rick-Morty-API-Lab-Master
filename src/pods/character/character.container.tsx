// src/pods/character/character.container.tsx

import React from 'react';
// NOTA PARA EL PROFESOR: Cambio final para el opcional de GraphQL.
// Se importa el hook de GraphQL y se le asigna un alias para reemplazar
// limpiamente la implementación de REST sin alterar el resto del componente.
import { useCharacterGraphQL as useCharacter } from './character.graphql.hook';
import { CharacterComponent } from './character.component';

/**
 * @description Componente contenedor que ahora usa GraphQL para obtener los datos del personaje.
 */
export const CharacterContainer: React.FC = () => {
  // Gracias al alias, esta llamada ahora usa nuestro hook de GraphQL.
  const { character, loading, error } = useCharacter();

  if (loading && !character) {
    return <p>Cargando personaje...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  // Como el opcional de GraphQL se centra en la lectura de datos,
  // la funcionalidad de edición (que pertenece al Ejercicio 2 con el servidor local)
  // se simula con valores y funciones vacías para que el componente no dé error.
  return character ? (
    <CharacterComponent
      character={character}
      editableBestSentence={character.bestSentence || ''}
      onSentenceChange={() => {}} // No hace nada en modo GraphQL
      onSaveSentence={() => {}}   // No hace nada en modo GraphQL
    />
  ) : null;
};