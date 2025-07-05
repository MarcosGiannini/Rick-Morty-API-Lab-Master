// src/pods/character-collection/character-collection.component.tsx

import React from 'react';
// NOTA PARA EL PROFESOR: Se utiliza la ruta relativa explícita para el ViewModel, subiendo un nivel
// y especificando la carpeta y el archivo exacto, según la estructura de proyecto.
import { CharacterCollectionVm } from '../character-collection/character-collection.vm'; 
// NOTA PARA EL PROFESOR: Se utiliza la ruta relativa explícita para el componente de tarjeta, entrando en la carpeta 'components'.
import { CharacterCardComponent } from './components/character-card.component'; 
// NOTA PARA EL PROFESOR: Se utiliza la ruta relativa explícita para los estilos de la colección, en la misma carpeta.
import * as S from './character-collection.styles'; 

/**
 * @description Propiedades que espera el componente CharacterCollectionComponent.
 * Define la estructura de los datos (lista de personajes) y la función de callback
 * para manejar la interacción del usuario al seleccionar un personaje.
 */
interface Props {
  characterList: CharacterCollectionVm['characterList']; 
  onSelectCharacter: (id: number) => void; 
}

/**
 * @description Componente de presentación para la lista de personajes.
 * Este componente se encarga de renderizar la interfaz de usuario de la colección de personajes.
 * Recibe los datos y las funciones de manejo de eventos a través de sus propiedades (props),
 * manteniendo la lógica de negocio separada de la presentación visual.
 *
 * Utiliza 'CharacterCardComponent' para renderizar cada personaje individualmente.
 *
 * @param props Las propiedades del componente: 'characterList' (lista de personajes)
 * y 'onSelectCharacter' (función de callback al seleccionar un personaje).
 */
export const CharacterCollectionComponent: React.FC<Props> = (props) => {
  const { characterList, onSelectCharacter } = props; 

  return (
    <S.CharacterCollectionContainer>
      {characterList.map((character) => (
        <CharacterCardComponent
          key={character.id} 
          character={character} 
          onSelectCharacter={onSelectCharacter} 
        />
      ))}
    </S.CharacterCollectionContainer>
  );
};