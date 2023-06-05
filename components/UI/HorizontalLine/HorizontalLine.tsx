import styled from 'styled-components';
import { LayoutProps, layout } from 'styled-system';

interface IHorizontalLine extends LayoutProps {}

export const HorizontalLine = styled.div<IHorizontalLine>`
  ${layout}

  height: 0.063rem;
  background-color: var(--gray);
  z-index: 2;
  position: absolute;
  left: 15rem;
`;
