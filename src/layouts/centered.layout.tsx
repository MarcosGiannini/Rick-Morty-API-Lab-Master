// src/layouts/centered.layout.tsx

import React from 'react';
import { css } from '@emotion/react'; // Importamos css
import * as classes from './centered.layout.styles';

interface Props {
  children: React.ReactNode;
}

export const CenteredLayout: React.FC<Props> = (props) => (
  // Aquí está el cambio: usamos la prop 'css' en lugar de 'className'
  <div css={classes.root}>{props.children}</div>
);