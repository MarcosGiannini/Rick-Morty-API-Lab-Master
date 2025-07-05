// src/pods/character/character.hook.ts

import React from 'react';
import { useParams } from 'react-router-dom'; // Hook para leer parámetros de la URL (el :id)
import { getCharacter } from './api/character.api';
import { mapCharacterFromApiToVm } from './character.mappers';
import { CharacterVm } from './character.vm';

/**
 * @description Hook personalizado para manejar la lógica de la página de detalle de un personaje.
 * @returns Un objeto con el personaje, y los estados de carga y error.
 */
export const useCharacter = () => {
  // Estado para almacenar los datos del personaje que se mostrará.
  const [character, setCharacter] = React.useState<CharacterVm | null>(null);
  // Estados de carga y error.
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');
  
  // useParams nos da los parámetros de la ruta, en nuestro caso, el 'id'.
  const { id } = useParams<{ id: string }>();

  // Usamos useEffect para cargar los datos del personaje cuando el componente se monta
  // o cuando el 'id' de la URL cambia.
  React.useEffect(() => {
    const fetchCharacter = async () => {
      if (id) { // Nos aseguramos de que el id existe.
        setLoading(true);
        setError('');
        try {
          // Llamamos a la API con el id de la URL.
          const apiCharacter = await getCharacter(id);
          // Mapeamos la respuesta y la guardamos en el estado.
          setCharacter(mapCharacterFromApiToVm(apiCharacter));
        } catch (apiError) {
          console.error(`Error al obtener el personaje con id ${id}:`, apiError);
          setError('Error al cargar el personaje.');
        } finally {
          setLoading(false);
        }
      }
    };

    fetchCharacter();
  }, [id]); // El efecto se volverá a ejecutar si el 'id' cambia.

  // Devolvemos los datos y estados para que el componente los use.
  return { character, loading, error };
};