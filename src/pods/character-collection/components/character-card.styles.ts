// src/pods/character-collection/components/character-card.styles.ts

import styled from '@emotion/styled';
import { theme } from '@/core/theme'; // Usando el alias que configuramos

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${theme.palette.divider};
  border-radius: ${theme.spacing(1)};
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  padding: ${theme.spacing(2)};
  width: 100%;
  max-width: 250px;
  box-shadow: ${theme.shadows[1]};
  
  &:hover {
    transform: translateY(-5px);
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 150px;
  overflow: hidden;
  border-radius: ${theme.spacing(1)};
  margin-bottom: ${theme.spacing(2)};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  text-align: center;
`;

export const Name = styled.h6`
  font-size: ${theme.typography.h6.fontSize};
  font-weight: ${theme.typography.fontWeightBold};
  color: ${theme.palette.primary.main};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0 0 ${theme.spacing(0.5)} 0;
`;

export const StatusAndSpecies = styled.span`
  font-size: ${theme.typography.body2.fontSize};
  color: ${theme.palette.text.secondary};
`;