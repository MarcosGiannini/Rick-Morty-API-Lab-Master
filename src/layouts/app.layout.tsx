// src/layouts/app.layout.tsx

import React from 'react';
import { ThemeProviderComponent } from '@/core/theme';
import * as S from '@/layouts/app.layout.styles';
import { Link } from 'react-router-dom';
import { switchRoutes } from '@/core/router';

interface Props {
  children: React.ReactNode;
}

export const AppLayout: React.FC<Props> = ({ children }) => {
  return (
    <ThemeProviderComponent>
      <S.AppLayoutContainer>
        <S.Header>
          <h1>Rick and Morty App</h1>
          <nav>
            <Link to={switchRoutes.characterCollection}>Personajes</Link>
            <Link to={switchRoutes.locationCollection}>Lugares</Link>
            {/* 👇 AÑADIMOS ESTA LÍNEA */}
            <Link to={switchRoutes.episodes}>Episodios</Link>
          </nav>
        </S.Header>

        <S.MainContent>{children}</S.MainContent>

        <S.Footer>
          <p>© 2025 Rick and Morty App. All rights reserved.</p>
        </S.Footer>
      </S.AppLayoutContainer>
    </ThemeProviderComponent>
  );
};