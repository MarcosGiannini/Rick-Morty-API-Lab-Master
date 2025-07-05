// src/layouts/app.layout.tsx

import React from 'react';
// Corregimos las importaciones para usar el alias '@'
import { ThemeProviderComponent } from '@/core/theme';
import * as S from '@/layouts/app.layout.styles';

interface Props {
  children: React.ReactNode;
}

export const AppLayout: React.FC<Props> = ({ children }) => {
  return (
    <ThemeProviderComponent>
      <S.AppLayoutContainer>
        <S.Header>
          <h1>Rick and Morty App</h1>
        </S.Header>

        <S.MainContent>{children}</S.MainContent>

        <S.Footer>
          <p>© 2025 Rick and Morty App. All rights reserved.</p>
        </S.Footer>
      </S.AppLayoutContainer>
    </ThemeProviderComponent>
  );
};