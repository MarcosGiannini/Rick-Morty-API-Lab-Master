// src/pods/character-collection/character-collection.container.tsx

import React from 'react';
import { generatePath, useNavigate } from 'react-router-dom';
import { CharacterCollectionComponent } from './character-collection.component';
import { useCharacterCollection } from './character-collection.hook';
// 👇 CAMBIO AQUÍ: importamos 'switchRoutes'
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
  
  React.useEffect(() => {
    fetchCharacterCollection();
  }, []);

  const onSelectCharacter = (id: number) => {
    // 👇 Y LO USAMOS AQUÍ
    navigate(generatePath(switchRoutes.character, { id }));
  };

  const handleNextPage = () => {
    if (pageInfo?.next) {
      fetchCharacterCollection({ pageUrl: pageInfo.next });
    }
  };

  const handlePrevPage = () => {
    if (pageInfo?.prev) {
      fetchCharacterCollection({ pageUrl: pageInfo.prev });
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    fetchCharacterCollection({ searchQuery: searchQuery });
  };
  
  const [searchQuery, setSearchQuery] = React.useState('');

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