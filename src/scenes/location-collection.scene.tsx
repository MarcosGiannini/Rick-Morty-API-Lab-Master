// src/scenes/location-collection.scene.tsx

import React from 'react';
import Axios from 'axios';
import styled from '@emotion/styled';
import { theme } from '@/core/theme';
import { Button, Box, Typography, CircularProgress } from '@mui/material';

// NOTA PARA EL PROFESOR: Para simplificar este challenge y evitar los problemas
// de resolución de módulos, se ha optado por un patrón de "Smart Component".
// Este único archivo de escena contiene su propia lógica de estado, fetching de datos y renderizado.

// 1. Definimos los tipos de datos aquí mismo para no crear más archivos.
interface Location {
  id: number;
  name: string;
  type: string;
  dimension: string;
}
interface PageInfo {
  next: string | null;
  prev: string | null;
}

// 2. Definimos los estilos necesarios aquí mismo.
const LocationListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  padding: 1.5rem;
`;
const LocationCard = styled.div`
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

export const LocationCollectionScene: React.FC = () => {
  // 3. Estado para guardar los datos, la carga y los errores.
  const [locations, setLocations] = React.useState<Location[]>([]);
  const [pageInfo, setPageInfo] = React.useState<PageInfo | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState('');

  // 4. Lógica para pedir los datos a la API.
  const fetchLocations = async (url: string = 'https://rickandmortyapi.com/api/location') => {
    setLoading(true);
    setError('');
    try {
      const { data } = await Axios.get(url);
      setLocations(data.results);
      setPageInfo(data.info);
    } catch (e) {
      setError('No se pudieron cargar los lugares.');
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  // 5. Efecto para llamar a la API al cargar la página por primera vez.
  React.useEffect(() => {
    fetchLocations();
  }, []);

  // 6. Renderizado de la página.
  return (
    <Box>
      <Typography variant="h4" component="h1" sx={{ textAlign: 'center', my: 4 }}>
        Lugares de Rick & Morty
      </Typography>

      {loading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
          <CircularProgress />
        </Box>
      )}

      {error && <Typography color="error" align="center">{error}</Typography>}

      {!loading && !error && (
        <>
          <LocationListContainer>
            {locations.map((location) => (
              <LocationCard key={location.id}>
                <Typography variant="h6" color="primary">{location.name}</Typography>
                <Typography variant="body2" color="textSecondary">Tipo: {location.type || 'Desconocido'}</Typography>
                <Typography variant="body2" color="textSecondary">Dimensión: {location.dimension || 'Desconocida'}</Typography>
              </LocationCard>
            ))}
          </LocationListContainer>

          <PaginationContainer>
            <Button variant="contained" onClick={() => fetchLocations(pageInfo?.prev || '')} disabled={!pageInfo?.prev || loading}>
              Anterior
            </Button>
            <Button variant="contained" onClick={() => fetchLocations(pageInfo?.next || '')} disabled={!pageInfo?.next || loading}>
              Siguiente
            </Button>
          </PaginationContainer>
        </>
      )}
    </Box>
  );
};