import styled from 'styled-components';
import {
  space,
  layout,
  flexbox,
  FlexboxProps,
  SpaceProps,
  LayoutProps,
} from 'styled-system';

interface IHeader extends FlexboxProps, SpaceProps, LayoutProps {
  // width?: string | number;
  // height?: string | number;
  // mt?: string | number;
}

export const Header = styled.header<IHeader>`
  ${space}
  ${layout}
  ${flexbox}
`;
