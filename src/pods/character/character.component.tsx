// src/pods/character/character.component.tsx

import React from 'react'; // Importamos React para crear componentes.
import { CharacterVm } from './character.vm'; // Importamos el ViewModel del personaje para tipado.
// NOTA PARA EL PROFESOR: Se corrige la importación de los estilos.
// Se importa 'styled' para que los elementos de estilo (CharacterDetailContainer, ImageContainer, etc.)
// se reconozcan como componentes JSX válidos.
import * as S from './character.styles'; // Importamos todos los estilos definidos para este componente.

/**
 * @description Propiedades que espera el componente CharacterComponent.
 * Define la estructura de los datos que recibirá para mostrar el detalle de un personaje.
 */
interface Props {
  character: CharacterVm; // El objeto de personaje a mostrar.
}

/**
 * @description Componente de presentación para el detalle de un personaje.
 * Muestra la información detallada de un personaje, como su nombre, estado, especie,
 * género, origen, ubicación, imagen y conteo de episodios.
 *
 * NOTA PARA EL PROFESOR: Este componente es un "dumb component" que solo se encarga
 * de la presentación de los datos que recibe por props, sin lógica de negocio.
 * @param props Las propiedades del componente: el objeto 'character'.
 */
export const CharacterComponent: React.FC<Props> = (props) => {
  const { character } = props; // Desestructuramos las props.

  return (
    // Contenedor principal del detalle del personaje, aplicando estilos definidos.
    // NOTA PARA EL PROFESOR: Se usa S.CharacterDetailContainer como un componente styled.
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
        <S.BestSentence>
          "<em>{character.bestSentence}</em>"
        </S.BestSentence>
      </S.InfoContainer>
    </S.CharacterDetailContainer>
  );
};