import styled from 'styled-components';
import {
  FlexProps,
  LayoutProps,
  SpaceProps,
  layout,
  space,
} from 'styled-system';
import { IFlex } from '../Flex/Flex';

interface ITextContainer extends SpaceProps, LayoutProps, IFlex {}

export const TextContainer = styled('div')<ITextContainer>`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  ${space}
  ${layout}
`;
