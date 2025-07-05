// src/core/theme/theme.helpers.ts

import { css, useTheme as useEmotionTheme } from '@emotion/react'; 
// NOTA PARA EL PROFESOR: Se importa la interfaz Theme y el objeto 'theme' directamente desde 'theme.ts'
// para asegurar el tipado correcto y resolver el problema de importación persistente.
import { Theme, theme } from './theme'; 

/**
 * @description Hook personalizado que permite acceder al objeto de tema global de la aplicación.
 * Utiliza el 'useTheme' de Emotion para obtener el tema y lo tipa correctamente con la interfaz 'Theme'.
 */
export const useTheme = () => useEmotionTheme() as Theme;

/**
 * @description Estilos globales para aplicar a toda la aplicación.
 * Estos estilos se inyectan en el DOM a nivel global, afectando elementos básicos como body o html.
 * Reciben el objeto 'theme' como argumento para aplicar los valores de la paleta y tipografía.
 */
export const globalStyles = (theme: Theme) => css`
  html,
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    background-color: ${theme.palette.background.default}; 
    color: ${theme.palette.text.primary}; 
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box; 
  }
`;