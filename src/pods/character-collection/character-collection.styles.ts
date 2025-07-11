// src/pods/character-collection/character-collection.styles.ts

import styled from '@emotion/styled';
import { theme } from '@/core/theme'; // Usando el alias que configuramos

/**
 * @description Estilos para el contenedor principal de la colección de personajes.
 */
export const CharacterCollectionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${theme.spacing(4)};
  padding: ${theme.spacing(4)};
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${theme.spacing(2)};
  margin-top: ${theme.spacing(4)};
  padding-bottom: ${theme.spacing(4)};
`;