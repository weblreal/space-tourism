import styled from 'styled-components';
import {
  FlexboxProps,
  JustifyContentProps,
  LayoutProps,
  SpaceProps,
  flexbox,
  layout,
  space,
} from 'styled-system';

export interface IFlex
  extends SpaceProps,
    LayoutProps,
    FlexboxProps,
    JustifyContentProps {}

export const Flex = styled.div<IFlex>`
  display: flex;
  ${space}
  ${layout}
  ${flexbox}
`;
