import React from 'react';
import { Flex } from '../UI/Flex/Flex';
import { Text } from '../UI/Text/Text';
import { TextContainer } from '../UI/TextContainer/TextContainer';

interface IData {
  button: { title: string };
  description: string;
  images: { landscape: string; portrait: string };
  subtitle: string;
  title: string;
}

interface IHomepage {
  homepage: IData;
}

export default function MainText({ homepage }: IHomepage) {
  const { button, description, subtitle, title } = homepage;
  return (
    <Flex alignItems="end">
      {/* think better name */}
      <TextContainer width="28.125rem" height="24.0625rem">
        <Text
          fontSize="1.75rem"
          color="var(--lightblue)"
          fontFamily="BarlowCondensed"
          letterSpacing="0.2969rem">
          {subtitle}
        </Text>
        <Text fontSize="9.375rem" color="var(--white)" fontFamily="Bellefair">
          {title}
        </Text>
        <Text
          fontSize="1.125rem"
          color="var(--lightblue)"
          fontFamily="BarlowCondensed"
          lineHeight="2rem">
          {description}
        </Text>
      </TextContainer>
    </Flex>
  );
}
