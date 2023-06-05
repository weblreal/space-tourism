import styled from 'styled-components';
import { LayoutProps, layout } from 'styled-system';

interface ILogo extends LayoutProps {}

export const Logo = styled.img<ILogo>`
  ${layout}
`;
