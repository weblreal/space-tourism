import React from 'react';
import { NavButton } from '../UI/NavButton/NavButton';
import { Text } from '../UI/Text/Text';

interface INav {
  count: string;
  name: string;
}

function Navbar({ navigation }: any) {
  //! MAKE IT DRY
  return navigation.map((item: INav) => (
    <NavButton
      key={item.count}
      href={item.name === 'Home' ? '/' : item.name.toLowerCase()}>
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
    </NavButton>
  ));
}

export default Navbar;
