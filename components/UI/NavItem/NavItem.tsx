import styled from 'styled-components';
import { Flex, IFlex } from '../Flex/Flex';
import { GapProps, gap } from '../Utility/Gap';

interface INavItem extends IFlex, GapProps {
  gap?: GapProps['gap'];
}

export const NavItem = styled(Flex)<INavItem>`
  ${gap}
`;
