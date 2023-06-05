import styled from 'styled-components';
import { Flex, IFlex } from '../UI/Flex/Flex';
import { LayoutProps, layout } from 'styled-system';

interface IContainer extends LayoutProps {}

const Container = styled(Flex)<IContainer>`
  ${layout}
`;

export default Container;
