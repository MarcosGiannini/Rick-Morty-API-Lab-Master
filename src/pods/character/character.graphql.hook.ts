// src/pods/character/character.graphql.hook.ts

import React from 'react';
import { useParams } from 'react-router-dom';
// 1. Importamos la nueva función de API específica para GraphQL
import { getCharacterGraphQL } from './api/character.graphql.api';
// Reutilizamos el mapper y el ViewModel existentes
import { mapCharacterFromApiToVm } from './character.mappers';
import { CharacterVm } from './character.vm';

/**
 * @description Hook para manejar la lógica de la página de detalle, consumiendo la API de GraphQL.
 */
export const useCharacterGraphQL = () => {
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
          // 2. Llamamos a la función específica de GraphQL
          const apiCharacter = await getCharacterGraphQL(id);
          setCharacter(mapCharacterFromApiToVm(apiCharacter));
        } catch (apiError) {
          console.error(`Error al obtener el personaje con id ${id} via GraphQL:`, apiError);
          setError('Error al cargar el personaje.');
        } finally {
          setLoading(false);
        }
      }
    };

    fetchCharacter();
  }, [id]);

  // Devolvemos lo mismo que el otro hook, pero la lógica interna ha cambiado.
  return { character, loading, error };
};