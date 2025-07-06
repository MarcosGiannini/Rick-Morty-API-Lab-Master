// src/pods/character/character.hook.ts

import React from 'react';
import { useParams } from 'react-router-dom';
// 1. Importamos la nueva función 'updateCharacter' de la API.
import { getCharacter, updateCharacter } from './api/character.api';
import { mapCharacterFromApiToVm } from './character.mappers';
import { CharacterVm } from './character.vm';

export const useCharacter = () => {
  const [character, setCharacter] = React.useState<CharacterVm | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');
  const { id } = useParams<{ id: string }>();

  React.useEffect(() => {
    const fetchCharacter = async () => {
      if (id) {
        setLoading(true);
        setError('');
        try {
          const apiCharacter = await getCharacter(id);
          setCharacter(mapCharacterFromApiToVm(apiCharacter));
        } catch (apiError) {
          console.error(`Error al obtener el personaje con id ${id}:`, apiError);
          setError('Error al cargar el personaje.');
        } finally {
          setLoading(false);
        }
      }
    };

    fetchCharacter();
  }, [id]);

  /**
   * @description Función para guardar la 'bestSentence' de un personaje.
   * Llama a la API para actualizar y, si tiene éxito, actualiza el estado local.
   * @param bestSentence La nueva frase a guardar.
   */
  const saveCharacterSentence = async (bestSentence: string) => {
    // No podemos guardar si no sabemos qué personaje es.
    if (!id || !character) return;

    try {
      // Llamamos a la API para enviar la actualización.
      await updateCharacter(id, { bestSentence });

      // Si la API guarda bien, actualizamos nuestro estado local para que la UI
      // se refresque instantáneamente con la nueva frase.
      setCharacter({
        ...character,
        bestSentence,
      });
      alert('¡Frase guardada con éxito!');
    } catch (apiError) {
      console.error(`Error al guardar la frase para el personaje con id ${id}:`, apiError);
      alert('Error al guardar la frase.');
    }
  };

  // 3. Devolvemos la nueva función junto con el resto de estados.
  return { character, loading, error, saveCharacterSentence };
};