// src/core/theme/theme.ts

const palette = {
  primary: { main: '#0D6EFD', contrastText: '#ffffff' },
  secondary: { main: '#6c757d', contrastText: '#ffffff' },
  background: {
    default: '#f8f9fa',
    paper: '#ffffff', // Añadido para los contenedores
  },
  text: { primary: '#212529', secondary: '#6c757d' },
  divider: 'rgba(0, 0, 0, 0.12)',
};

const typography = {
  fontFamily: "'Roboto', sans-serif",
  fontWeightBold: 700,
  h2: { fontSize: '2rem', fontWeight: 700 },
  h4: { fontSize: '1.75rem' },
  h5: { fontSize: '1.5rem', fontWeight: 500 },
  h6: { fontSize: '1.25rem' },
  body1: { fontSize: '1rem' },
  body2: { fontSize: '0.875rem' },
  caption: { fontSize: '0.875rem' },
};

const shadows = [
  'none',
  '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
];

const breakpoints = {
  values: {
    sm: 600,
    md: 900,
  },
  // Función helper para crear media queries
  up: (key: 'sm' | 'md') => `@media (min-width: ${breakpoints.values[key]}px)`,
};

const spacing = (factor: number): string => `${8 * factor}px`;

export const theme = {
  palette,
  typography,
  spacing,
  shadows,
  breakpoints,
};

export type Theme = typeof theme;