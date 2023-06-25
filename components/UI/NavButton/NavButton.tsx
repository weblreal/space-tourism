import styled from 'styled-components';
import INavButton from './INavButton';
import LinkButton from '../LinkButton/LinkButton';

export const NavButton = styled(LinkButton)<INavButton>`
  height: 100%;
  border-bottom: 0.1875rem solid transparent;
  background-color: transparent;

  &:focus {
    border-bottom: 0.1875rem solid var(--white);
  }
  &:hover {
    border-bottom: 0.1875rem solid var(--gray);
  }
`;
