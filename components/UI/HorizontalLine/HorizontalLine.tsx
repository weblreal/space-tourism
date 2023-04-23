import styled from 'styled-components';
import {
  color,
  ColorProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  space,
  SpaceProps,
} from 'styled-system';

interface IHorizontalLine
  extends SpaceProps,
    ColorProps,
    LayoutProps,
    PositionProps {}

export const HorizontalLine = styled.div<IHorizontalLine>`
  ${position}
  ${space}
  ${layout}
  ${color}
`;
