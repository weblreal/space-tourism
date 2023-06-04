import styled from 'styled-components';
import {
  background,
  BackgroundProps,
  layout,
  LayoutProps,
} from 'styled-system';

interface IBackgroundImage extends BackgroundProps, LayoutProps {}

export const BackgroundImage = styled.div<IBackgroundImage>`
  ${background}
  ${layout}
  position: absolute;
`;
