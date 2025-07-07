// src/pods/character-collection/character-collection.container.tsx

import React from 'react';
import { generatePath, useNavigate } from 'react-router-dom';
import { CharacterCollectionComponent } from './character-collection.component';
import { useCharacterCollectionGraphQL as useCharacterCollection } from './character-collection.graphql.hook';
// Corregido: Usamos switchRoutes
import { switchRoutes } from '@/core/router';

export const CharacterCollectionContainer: React.FC = () => {
  const navigate = useNavigate();

  const {
    characterList,
    fetchCharacterCollection,
    loading,
    error,
    pageInfo,
  } = useCharacterCollection();

  const onSelectCharacter = (id: number) => {
    // Corregido: Usamos switchRoutes
    navigate(generatePath(switchRoutes.character, { id }));
  };

  const handleNextPage = () => {
    // Nos aseguramos de que 'next' es un número antes de pasarlo.
    if (typeof pageInfo?.next === 'number') {
      fetchCharacterCollection(pageInfo.next);
    }
  };

  const handlePrevPage = () => {
    // Nos aseguramos de que 'prev' es un número antes de pasarlo.
    if (typeof pageInfo?.prev === 'number') {
      fetchCharacterCollection(pageInfo.prev);
    }
  };

  // ... (El resto de la lógica de búsqueda se queda como está) ...
  const [searchQuery, setSearchQuery] = React.useState('');
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value);
  const handleSearch = () => console.log('Búsqueda no implementada para GraphQL en este paso.');

  return (
    <CharacterCollectionComponent
      characterList={characterList}
      onSelectCharacter={onSelectCharacter}
      onNextPage={handleNextPage}
      onPrevPage={handlePrevPage}
      pageInfo={pageInfo}
      loading={loading}
      error={error}
      searchQuery={searchQuery}
      onSearchChange={handleSearchChange}
      onSearch={handleSearch}
    />
  );
};