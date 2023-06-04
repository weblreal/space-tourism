import styled from 'styled-components';
import {
  color,
  ColorProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from 'styled-system';

interface IText extends TypographyProps, ColorProps, SpaceProps {}

export const Text = styled('p')<IText>`
  display: flex;
  align-items: center;
  ${typography}
  ${color}
  ${space}
`;
