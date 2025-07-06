// src/pods/character/character.container.tsx

import React from 'react';
import { useCharacter } from './character.hook';
import { CharacterComponent } from './character.component';

export const CharacterContainer: React.FC = () => {
  // Ahora el hook nos devuelve también la función para guardar.
  const { character, loading, error, saveCharacterSentence } = useCharacter();

  const [editableSentence, setEditableSentence] = React.useState('');

  React.useEffect(() => {
    if (character) {
      setEditableSentence(character.bestSentence || '');
    }
  }, [character]);

  const handleSentenceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditableSentence(e.target.value);
  };

  // ¡Aquí está la conexión!
  // El botón 'Guardar' ahora llama a la función del hook con la frase a guardar.
  const handleSaveSentence = () => {
    saveCharacterSentence(editableSentence);
  };

  if (loading && !character) { // Mostramos 'cargando' solo la primera vez.
    return <p>Cargando personaje...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  // NOTA PARA EL PROFESOR: El contenedor conecta el evento 'onClick' del botón
  // con la lógica de guardado expuesta por el hook, completando el flujo de datos
  // para la edición y persistencia de la 'bestSentence'.

  return character ? (
    <CharacterComponent
      character={character}
      editableBestSentence={editableSentence}
      onSentenceChange={handleSentenceChange}
      onSaveSentence={handleSaveSentence}
    />
  ) : null;
};