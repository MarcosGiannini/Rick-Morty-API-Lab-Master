// src/pods/character/character.styles.ts

import styled from '@emotion/styled';
import { theme } from '@/core/theme'; // Usando el alias correcto

export const CharacterDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${theme.spacing(4)};
  gap: ${theme.spacing(3)};
  background-color: ${theme.palette.background.paper};
  border-radius: ${theme.spacing(1)};
  box-shadow: ${theme.shadows[1]};
  max-width: 600px;
  margin: ${theme.spacing(4)} auto;

  ${theme.breakpoints.up('md')} {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const ImageContainer = styled.div`
  width: 200px;
  height: 200px;
  overflow: hidden;
  border-radius: 50%;
  border: 4px solid ${theme.palette.primary.main};
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(1.5)};
  text-align: center;

  ${theme.breakpoints.up('md')} {
    text-align: left;
  }
`;

export const Name = styled.h2`
  color: ${theme.palette.primary.main};
  font-size: ${theme.typography.h2.fontSize};
  font-weight: ${theme.typography.fontWeightBold};
  margin-top: 0;
  margin-bottom: ${theme.spacing(1)};
`;

export const DetailItem = styled.p`
  font-size: ${theme.typography.body1.fontSize};
  color: ${theme.palette.text.primary};
  margin: 0;
  strong {
    color: ${theme.palette.secondary.main};
  }
`;

export const BestSentence = styled.p`
  font-size: ${theme.typography.body2.fontSize};
  color: ${theme.palette.text.secondary};
  margin-top: ${theme.spacing(2)};
  font-style: italic;
  max-width: 80%;
  margin-left: auto;
  margin-right: auto;
`;