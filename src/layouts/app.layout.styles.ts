// src/layouts/app.layout.styles.ts

import styled from '@emotion/styled'; // CAMBIO: importamos 'styled' en vez de 'css'
import { theme } from '@/core/theme';

// CAMBIO: Usamos styled.div para crear un COMPONENTE real
export const AppLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: ${theme.typography.fontFamily};
  background-color: ${theme.palette.background.default};
  color: ${theme.palette.text.primary};
`;

// CAMBIO: Usamos styled.header para un componente semántico
export const Header = styled.header`
  background-color: ${theme.palette.primary.main};
  color: ${theme.palette.primary.contrastText};
  padding: ${theme.spacing(2)};
  text-align: center;

  h1 {
    font-size: ${theme.typography.h5.fontSize};
    font-weight: ${theme.typography.h5.fontWeight};
    margin: 0;
  }
`;

// CAMBIO: Usamos styled.main
export const MainContent = styled.main`
  flex-grow: 1;
  padding: ${theme.spacing(2)} ${theme.spacing(4)};
`;

// CAMBIO: Usamos styled.footer
export const Footer = styled.footer`
  background-color: ${theme.palette.secondary.main};
  color: ${theme.palette.secondary.contrastText};
  padding: ${theme.spacing(2)};
  text-align: center;

  p {
    font-size: ${theme.typography.caption.fontSize};
    margin: 0;
  }
`;