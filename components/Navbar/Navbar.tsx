import React from 'react';
import { LinkButton } from '../UI/LinkButton/LinkButton';
import { Text } from '../UI/Text/Text';

interface INav {
  count: string;
  name: string;
}

function Navbar({ navigation }: any) {
  //! MAKE IT DRY
  return navigation.map((item: INav) => (
    <LinkButton
      key={item.count}
      href={item.name === 'Home' ? '/' : item.name.toLowerCase()}
      display="flex">
      <Text
        color="var(--white)"
        fontFamily="BarlowCondensed"
        fontWeight="bold"
        fontSize="1rem"
        letterSpacing="0.25rem">
        {item.count}
      </Text>
      <Text
        fontFamily="BarlowCondensed"
        color="var(--white)"
        paddingLeft="0.8125rem"
        fontSize="1rem"
        letterSpacing="0.25rem">
        {item.name.toUpperCase()}
      </Text>
    </LinkButton>
  ));
}

export default Navbar;
