import Link from 'next/link';
import styled from 'styled-components';
import { color, flexbox, layout, typography, variant } from 'styled-system';
import ILinkButton from './ILinkButton';

const LinkButton = styled(Link)<ILinkButton>`
  display: flex;
  background-color: ${(props) => props.backgroundColor || 'var(--white)'};

  ${flexbox}
  ${color}
  ${typography}
  ${layout}

  ${variant({
    variants: {
      mainButton: {
        width: '17.125rem',
        height: '17.125rem',
        fontSize: '2rem',
        borderRadius: '50%',
        fontFamily: 'Bellefair',
        // '&:hover': {
        //   borderBottom: 'none !important',
        // },
        // '&:focus': {
        //   borderBottom: 'none !important',
        // },
      },
    },
  })}
`;

export default LinkButton;
