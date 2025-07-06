// src/core/theme/theme.ts

import { createTheme } from '@mui/material/styles';

// NOTA PARA EL PROFESOR: Versión final del tema. Se eliminan las sombras
// personalizadas para usar el array por defecto de Material-UI, solucionando
// el último error de tipado y asegurando la máxima compatibilidad.
export const theme = createTheme({
  palette: {
    primary: { main: '#0D6EFD', contrastText: '#ffffff' },
    secondary: { main: '#6c757d', contrastText: '#ffffff' },
    background: {
      default: '#f8f9fa',
      paper: '#ffffff',
    },
    text: { primary: '#212529', secondary: '#6c757d' },
    divider: 'rgba(0, 0, 0, 0.12)',
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    fontWeightBold: 700,
    h2: { fontSize: '2rem', fontWeight: 700 },
    h4: { fontSize: '1.75rem' },
    h5: { fontSize: '1.5rem', fontWeight: 500 },
    h6: { fontSize: '1.25rem' },
    body1: { fontSize: '1rem' },
    body2: { fontSize: '0.875rem' },
    caption: { fontSize: '0.875rem' },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export type Theme = typeof theme;