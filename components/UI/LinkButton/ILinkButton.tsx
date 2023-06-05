import {
  ColorProps,
  FlexProps,
  FlexboxProps,
  LayoutProps,
  TypographyProps,
} from 'styled-system';

export default interface ILinkButton
  extends FlexboxProps,
    FlexProps,
    ColorProps,
    TypographyProps,
    LayoutProps {
  backgroundColor?:
    | 'var(--white)'
    | 'var(--darkblue)'
    | 'var(--lightblue)'
    | 'var(--gray)'
    | 'transparent';
  variant?: 'mainButton';
}
