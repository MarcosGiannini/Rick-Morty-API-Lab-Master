// src/pods/character-collection/components/character-card.component.tsx

import React from 'react'; // Importamos React para crear componentes.
import { CharacterVm } from '../character-collection.vm'; // Importamos el ViewModel del personaje para tipado.
import * as S from './character-card.styles'; // Importamos los estilos para este componente.

/**
 * @description Propiedades que espera el componente CharacterCardComponent.
 * Define la estructura de los datos que recibirá cada tarjeta de personaje.
 */
interface Props {
  character: CharacterVm; // El objeto de personaje a mostrar en esta tarjeta.
  onSelectCharacter: (id: number) => void; // Función callback que se ejecuta al seleccionar la tarjeta.
}

/**
 * @description Componente de presentación para una tarjeta individual de personaje.
 * Muestra la imagen, nombre, estado y especie del personaje.
 * Es un componente de UI "tonto" (dumb component) que recibe sus datos y funciones
 * a través de props, y no contiene lógica de negocio propia.
 * @param props Las propiedades del componente: un objeto 'character' y la función 'onSelectCharacter'.
 */
export const CharacterCardComponent: React.FC<Props> = (props) => {
  const { character, onSelectCharacter } = props; // Desestructuramos las props para facilitar el acceso.

  /**
   * @description Maneja el evento de clic en la tarjeta.
   * Llama a la función 'onSelectCharacter' pasada por props,
   * enviando el ID del personaje seleccionado.
   */
  const handleSelectCharacter = () => {
    onSelectCharacter(character.id); // Llamamos a la función de selección con el ID del personaje.
  };

  return (
    // Contenedor principal de la tarjeta, que también es clickeable.
    // Aplicamos los estilos definidos en 'S.CardContainer'.
    <S.CardContainer onClick={handleSelectCharacter}>
      {/* Sección de la imagen del personaje. */}
      {/* Se utiliza 'S.ImageContainer' para los estilos del contenedor de la imagen. */}
      {/* La URL de la imagen se obtiene de 'character.image'. */}
      <S.ImageContainer>
        <img src={character.image} alt={character.name} />
      </S.ImageContainer>

      {/* Sección del contenido de texto de la tarjeta. */}
      {/* Se utiliza 'S.TextContent' para los estilos de esta sección. */}
      <S.TextContent>
        {/* Nombre del personaje. */}
        <S.Name>{character.name}</S.Name>
        {/* Estado y especie del personaje. */}
        <S.StatusAndSpecies>
          {character.status} - {character.species}
        </S.StatusAndSpecies>
      </S.TextContent>
    </S.CardContainer>
  );
};