// src/pods/character/character.component.tsx

import React from 'react';
import { CharacterVm } from './character.vm';
import * as S from './character.styles';
// NOTA PARA EL PROFESOR: Se añaden componentes de Material-UI para el formulario de edición.
import { TextField, Button, Box } from '@mui/material';

/**
 * @description Propiedades que espera el componente. Ahora incluye las necesarias
 * para la edición de la 'mejor frase'.
 */
interface Props {
  character: CharacterVm;
  editableBestSentence: string;
  onSentenceChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSaveSentence: () => void;
}

/**
 * @description Componente de presentación para el detalle de un personaje.
 * Ahora incluye un formulario para editar y guardar la 'bestSentence'.
 */
export const CharacterComponent: React.FC<Props> = (props) => {
  const {
    character,
    editableBestSentence,
    onSentenceChange,
    onSaveSentence,
  } = props;

  return (
    <S.CharacterDetailContainer>
      <S.ImageContainer>
        <img src={character.image} alt={character.name} />
      </S.ImageContainer>

      <S.InfoContainer>
        <S.Name>{character.name}</S.Name>
        <S.DetailItem>
          <strong>Status:</strong> {character.status}
        </S.DetailItem>
        <S.DetailItem>
          <strong>Species:</strong> {character.species}
        </S.DetailItem>
        <S.DetailItem>
          <strong>Type:</strong> {character.type || 'N/A'}
        </S.DetailItem>
        <S.DetailItem>
          <strong>Gender:</strong> {character.gender}
        </S.DetailItem>
        <S.DetailItem>
          <strong>Origin:</strong> {character.originName}
        </S.DetailItem>
        <S.DetailItem>
          <strong>Last Location:</strong> {character.locationName}
        </S.DetailItem>
        <S.DetailItem>
          <strong>Episodes:</strong> {character.episodeCount}
        </S.DetailItem>
        
        {/* Mostramos la mejor frase actual si existe */}
        {character.bestSentence && (
          <S.BestSentence>
            "<em>{character.bestSentence}</em>"
          </S.BestSentence>
        )}

        {/* Formulario de edición */}
        <Box
          component="div"
          sx={{
            width: '100%',
            mt: 4, // margen superior (margin-top)
            display: 'flex',
            flexDirection: 'column',
            gap: 2, // espacio entre elementos
          }}
        >
          <TextField
            label="Editar la mejor frase"
            variant="outlined"
            fullWidth
            multiline
            rows={2}
            value={editableBestSentence}
            onChange={onSentenceChange}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={onSaveSentence}
          >
            Guardar Frase
          </Button>
        </Box>

      </S.InfoContainer>
    </S.CharacterDetailContainer>
  );
};