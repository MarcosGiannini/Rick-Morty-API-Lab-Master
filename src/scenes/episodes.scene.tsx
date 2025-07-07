// src/scenes/episodes.scene.tsx

import React from 'react';
import Axios from 'axios';
import styled from '@emotion/styled';
import { theme } from '@/core/theme';
import { Button, Box, Typography, CircularProgress } from '@mui/material';

// NOTA PARA EL PROFESOR: Se sigue el patrón de "Smart Component" para este challenge,
// encapsulando toda la lógica y la vista en un solo archivo para mayor simplicidad y robustez.

// 1. Definimos los tipos de datos para los episodios.
interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string; // Ejemplo: "S01E01"
}
interface PageInfo {
  next: string | null;
  prev: string | null;
}

// 2. Definimos los estilos para este componente.
const EpisodesListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem;
  padding: 1.5rem;
`;
const EpisodeCard = styled.div`
  border: 1px solid ${theme.palette.divider};
  border-radius: ${theme.spacing(1)};
  padding: ${theme.spacing(2)};
  background-color: ${theme.palette.background.paper};
  box-shadow: ${theme.shadows[1]};
`;
const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding: 1.5rem;
`;

export const EpisodesScene: React.FC = () => {
  // 3. Estado para guardar los datos.
  const [episodes, setEpisodes] = React.useState<Episode[]>([]);
  const [pageInfo, setPageInfo] = React.useState<PageInfo | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState('');

  // 4. Lógica para pedir los datos a la API de episodios.
  const fetchEpisodes = async (url: string = 'https://rickandmortyapi.com/api/episode') => {
    setLoading(true);
    setError('');
    try {
      const { data } = await Axios.get(url);
      setEpisodes(data.results);
      setPageInfo(data.info);
    } catch (e) {
      setError('No se pudieron cargar los episodios.');
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  // 5. Efecto para la carga inicial de datos.
  React.useEffect(() => {
    fetchEpisodes();
  }, []);

  // 6. Renderizado de la página.
  return (
    <Box>
      <Typography variant="h4" component="h1" sx={{ textAlign: 'center', my: 4 }}>
        Episodios de Rick & Morty
      </Typography>

      {loading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
          <CircularProgress />
        </Box>
      )}

      {error && <Typography color="error" align="center">{error}</Typography>}

      {!loading && !error && (
        <>
          <EpisodesListContainer>
            {episodes.map((episode) => (
              <EpisodeCard key={episode.id}>
                <Typography variant="h6" color="primary">{episode.episode}: {episode.name}</Typography>
                <Typography variant="body2" color="textSecondary">
                  Fecha de emisión: {episode.air_date}
                </Typography>
              </EpisodeCard>
            ))}
          </EpisodesListContainer>

          <PaginationContainer>
            <Button variant="contained" onClick={() => fetchEpisodes(pageInfo?.prev || '')} disabled={!pageInfo?.prev || loading}>
              Anterior
            </Button>
            <Button variant="contained" onClick={() => fetchEpisodes(pageInfo?.next || '')} disabled={!pageInfo?.next || loading}>
              Siguiente
            </Button>
          </PaginationContainer>
        </>
      )}
    </Box>
  );
};