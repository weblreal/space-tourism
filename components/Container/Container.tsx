import styled, { css } from 'styled-components';
import { IFlex } from '../UI/Flex/Flex';
import { compose, layout, space } from 'styled-system';

interface IContainer extends IFlex {}

const Container = styled('div')<IContainer>(
  compose(layout, space),
  css`
    ${layout}
    ${space}
  `
);

export default Container;
