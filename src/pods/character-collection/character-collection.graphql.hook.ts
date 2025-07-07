// src/pods/character-collection/character-collection.graphql.hook.ts
import React from 'react';
import { getCharacterCollectionGraphQL } from './api/character-collection.graphql.api';
import { mapCharacterCollectionFromApiToVm } from './character-collection.mapper';
import { CharacterCollectionVm } from './character-collection.vm';
import { CharacterCollectionFromApi } from './api/character-collection.api-model';

export const useCharacterCollectionGraphQL = () => {
  const [characterList, setCharacterList] = React.useState<CharacterCollectionVm['characterList']>([]);
  const [pageInfo, setPageInfo] = React.useState<CharacterCollectionFromApi['info'] | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');

  const fetchCharacterCollection = async (page: number = 1) => {
    setLoading(true);
    setError('');
    try {
      const characterCollection = await getCharacterCollectionGraphQL(page);
      setCharacterList(mapCharacterCollectionFromApiToVm(characterCollection).characterList);
      setPageInfo(characterCollection.info);
    } catch (apiError) {
      console.error('Error fetching character collection via GraphQL:', apiError);
      setError('Error al cargar los personajes.');
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchCharacterCollection(1);
  }, []);

  return { characterList, loading, error, fetchCharacterCollection, pageInfo };
};