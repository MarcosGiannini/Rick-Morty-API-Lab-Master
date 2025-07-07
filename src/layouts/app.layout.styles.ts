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

export const Header = styled.header`
  background-color: ${theme.palette.primary.main};
  color: ${theme.palette.primary.contrastText};
  padding: ${theme.spacing(1)} ${theme.spacing(4)};
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: ${theme.typography.h5.fontSize};
    font-weight: ${theme.typography.h5.fontWeight};
    margin: 0;
  }

  // NOTA PARA EL PROFESOR: Se añade un <nav> para la navegación principal.
  nav {
    display: flex;
    gap: ${theme.spacing(3)};
  }

  // Estilos para los enlaces de navegación.
  a {
    color: ${theme.palette.primary.contrastText};
    text-decoration: none;
    font-size: 1rem;
    font-weight: 500;
    padding: ${theme.spacing(1)};
    border-radius: 4px;
    transition: background-color 0.2s ease-in-out;

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
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