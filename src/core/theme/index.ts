// src/core/theme/index.ts

// Exportamos el VALOR 'theme' de forma explícita.
export { theme } from './theme';
// Exportamos el TIPO 'Theme' de forma explícita y segura.
export type { Theme } from './theme';

// Re-exportamos el resto de utilidades del tema.
export * from './theme-provider.component';
export * from './theme.helpers';