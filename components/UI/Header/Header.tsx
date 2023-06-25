import styled from 'styled-components';
import { Flex } from '../Flex/Flex';
import { layout, space } from 'styled-system';
import IHeader from './IHeader';

export const Header = styled(Flex)<IHeader>`
  ${space}
  ${layout}
`;
