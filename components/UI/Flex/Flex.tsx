import styled from 'styled-components';
import { FlexboxProps, flexbox } from 'styled-system';

export interface IFlex extends FlexboxProps {}

export const Flex = styled.div<IFlex>`
  display: flex;
  ${flexbox}
`;
