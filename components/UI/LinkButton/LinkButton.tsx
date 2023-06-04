import Link from 'next/link';
import styled, { css } from 'styled-components';

import {
  BackgroundProps,
  ColorProps,
  FlexBasisProps,
  FlexProps,
  FlexboxProps,
  LayoutProps,
  TypographyProps,
  background,
  color,
  flexbox,
  layout,
  typography,
  variant,
} from 'styled-system';
import { IFlex } from '../Flex/Flex';

type IButton = 'circle';

interface ILinkButton extends ColorProps, TypographyProps, LayoutProps, IFlex {
  variant?: IButton;
}

export const LinkButton = styled('a')<ILinkButton>`
  background-color: transparent;
  height: 100%;
  //!bug when hovered
  border-bottom: 0.1875rem solid transparent;

  ${flexbox}
  ${color}
  ${typography}
  ${layout}
  ${variant({
    variants: {
      circle: {
        borderRadius: '50%',
        '&:hover': {
          borderBottom: 'none !important',
        },
        '&:focus': {
          borderBottom: 'none !important',
        },
      },
    },
  })}

  &:focus {
    border-bottom: 0.1875rem solid var(--white);
  }
  &:hover {
    border-bottom: 0.1875rem solid var(--gray);
  }
`;
