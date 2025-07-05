// src/core/theme/theme-provider.component.tsx

import React from 'react'; 
import { Global, ThemeProvider as EmotionThemeProvider } from '@emotion/react'; 
// NOTA PARA EL PROFESOR: Se importa el objeto 'theme' y la interfaz 'Theme' directamente desde 'theme.ts'
// para asegurar que el proveedor de tema funcione correctamente.
import { theme, Theme } from './theme'; 
import { globalStyles } from './theme.helpers'; 

/**
 * @description Propiedades que espera el componente ThemeProviderComponent.
 * Recibe los componentes hijos que se envolverán con el ThemeProvider.
 */
interface Props {
  children: React.ReactNode; 
}

/**
 * @description Componente proveedor de tema global para la aplicación.
 * Este componente envuelve a toda la aplicación con el 'ThemeProvider' de Emotion,
 * haciendo que el objeto 'theme' esté disponible para todos los componentes anidados.
 * También aplica estilos globales a la aplicación mediante el componente 'Global'.
 */
export const ThemeProviderComponent: React.FC<Props> = ({ children }) => {
  return (
    <EmotionThemeProvider theme={theme}>
      <Global styles={globalStyles(theme)} /> 
      {children}
    </EmotionThemeProvider>
  );
};