// src/pods/character-collection/character-collection.component.tsx

import React from 'react';
import { CharacterCollectionVm } from './character-collection.vm';
import { CharacterCardComponent } from './components/character-card.component';
import * as S from './character-collection.styles';
import { Button, Box, Typography, CircularProgress, TextField } from '@mui/material';
import { CharacterCollectionFromApi } from './api/character-collection.api-model';

type PageInfo = CharacterCollectionFromApi['info'] | null;

interface Props {
  characterList: CharacterCollectionVm['characterList'];
  onSelectCharacter: (id: number) => void;
  onNextPage: () => void;
  onPrevPage: () => void;
  pageInfo: PageInfo;
  loading: boolean;
  error: string;
  searchQuery: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
}

export const CharacterCollectionComponent: React.FC<Props> = (props) => {
  const {
    characterList,
    onSelectCharacter,
    onNextPage,
    onPrevPage,
    pageInfo,
    loading,
    error,
    searchQuery,
    onSearchChange,
    onSearch,
  } = props;

  return (
    <Box sx={{ width: '100%' }}>
      {/* Formulario de Búsqueda */}
      <Box 
        component="div" 
        sx={{ my: 4, display: 'flex', justifyContent: 'center', gap: 2, alignItems: 'center' }}
      >
        <TextField
          label="Buscar por nombre"
          variant="outlined"
          value={searchQuery}
          onChange={onSearchChange}
          onKeyDown={(e) => e.key === 'Enter' && onSearch()}
        />
        <Button variant="contained" onClick={onSearch} disabled={loading}>
          Buscar
        </Button>
      </Box>

      {/* Mensaje de error o "No encontrado" */}
      {error && !loading && (
        <Typography color="error" align="center" sx={{ my: 4 }}>
          {error}
        </Typography>
      )}

      {/* Cuadrícula de Personajes */}
      <S.CharacterCollectionContainer>
        {characterList.map((character) => (
          <CharacterCardComponent
            key={character.id}
            character={character}
            onSelectCharacter={onSelectCharacter}
          />
        ))}
      </S.CharacterCollectionContainer>

      {/* Feedback de Carga */}
      {loading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
          <CircularProgress />
        </Box>
      )}

      {/* Paginación */}
      {/* Solo mostramos la paginación si hay páginas a las que ir y no hay error */}
      {pageInfo && pageInfo.count > 0 && !error && (
        <S.PaginationContainer>
          <Button variant="contained" onClick={onPrevPage} disabled={!pageInfo?.prev || loading}>
            Anterior
          </Button>
          <Button variant="contained" onClick={onNextPage} disabled={!pageInfo?.next || loading}>
            Siguiente
          </Button>
        </S.PaginationContainer>
      )}
    </Box>
  );
};