import styled from 'styled-components';
import { color, ColorProps, typography, TypographyProps } from 'styled-system';
import Link from 'next/link';

interface INavText extends TypographyProps, ColorProps {}

export const NavText = styled(Link)<INavText>`
  ${typography}
  ${color}
`;
