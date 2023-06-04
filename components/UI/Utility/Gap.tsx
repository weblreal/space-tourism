import { StylesProps, style } from 'styled-system';
import { CSSProperties } from 'react';
import { IFlex } from '../Flex/Flex';

export interface GapProps {
  gap?: CSSProperties['gap'];
}

export const gap = style({
  prop: 'gap',
  cssProperty: 'gap',
});
