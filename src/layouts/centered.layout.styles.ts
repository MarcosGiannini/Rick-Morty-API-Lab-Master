// src/layouts/centered.layout.styles.ts

import { css } from '@emotion/react'; // Corregido a @emotion/react
import { theme } from '@/core/theme';   // Usando el alias correcto

export const root = css`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  margin-top: 2rem;

  @media (min-width: ${theme.breakpoints.values.sm}px) {
    justify-items: center;
  }
`;