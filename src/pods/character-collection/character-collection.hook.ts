// src/pods/character-collection/character-collection.hook.ts

import React from 'react';
import { getCharacterCollection } from './api/character-collection.api';
import { mapCharacterCollectionFromApiToVm } from './character-collection.mapper';
import { CharacterCollectionVm } from './character-collection.vm';
import { CharacterCollectionFromApi } from './api/character-collection.api-model';

export const useCharacterCollection = () => {
  const [characterList, setCharacterList] = React.useState<CharacterCollectionVm['characterList']>([]);
  const [pageInfo, setPageInfo] = React.useState<CharacterCollectionFromApi['info'] | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');

  /**
   * @description Función para obtener personajes. Ahora acepta un objeto de opciones
   * para poder manejar tanto la paginación como la búsqueda.
   * @param options Objeto con la URL de la página o el término de búsqueda.
   */
  const fetchCharacterCollection = async (
    options: { pageUrl?: string; searchQuery?: string } = {}
  ) => {
    setLoading(true);
    setError('');

    // Preparamos las opciones para la API
    const apiOptions = {
      url: options.pageUrl,
      searchQuery: options.searchQuery,
    };

    try {
      const characterCollection = await getCharacterCollection(apiOptions);

      setCharacterList(mapCharacterCollectionFromApiToVm(characterCollection).characterList);
      setPageInfo(characterCollection.info);

      // Si no hay resultados, ponemos un mensaje informativo.
      if (characterCollection.results.length === 0) {
        setError('No se encontraron personajes con ese nombre.');
      }

    } catch (apiError) {
      console.error('Error fetching character collection:', apiError);
      setError('Error al cargar los personajes.');
    } finally {
      setLoading(false);
    }
  };

  return { characterList, loading, error, fetchCharacterCollection, pageInfo };
};