import { Header } from '@/components/UI/Header/Header';
import { HorizontalLine } from '@/components/UI/HorizontalLine/HorizontalLine';
import { Nav } from '@/components/UI/Nav/Nav';
import path from 'path';
import fs from 'fs';
import React from 'react';
import Logo from '../public/assets/shared/logo.svg';
import { BackgroundImage } from '@/components/UI/BackgroundImage/BackgroundImage';
import Navbar from '@/components/Navbar/Navbar';
import MainText from '@/components/MainText/MainText';
import { LinkButton } from '@/components/UI/LinkButton/LinkButton';
import { Flex } from '@/components/UI/Flex/Flex';
import Container from '@/components/Container/Container';

// CREATE A COMPONENT
function HomePage(props: any) {
  const { navigation, homepage } = props.data;
  const backgroundImage = homepage.images.landscape;

  return (
    <>
      <BackgroundImage
        backgroundImage={`url(${backgroundImage})`}
        minHeight="100vh"
        maxWidth="100vw"
        backgroundSize="cover">
        <Header
          width="100vw"
          height="6rem"
          mt="2.5rem"
          display="flex"
          alignItems="center"
          justifyContent="space-between">
          <Logo
            style={{
              margin: '0 4rem 0 3.4375rem',
              'z-index': '3',
            }}
          />
          <HorizontalLine
            width={['10%', '20%', '25%', '29%']}
            height=" 0.063rem"
            backgroundColor="var(--gray)"
            zIndex="2"
            position="absolute"
            left="15rem"
          />
          <Nav>{<Navbar navigation={navigation} />}</Nav>
        </Header>
        <Flex justifyContent="center">
          <Flex
            alignItems="flex-end"
            justifyContent="space-between"
            width="70rem">
            <MainText homepage={homepage} />
            <LinkButton
              display="flex"
              justifyContent="center"
              alignItems="center"
              href="#"
              variant="circle"
              width="17.125rem"
              height="17.125rem"
              backgroundColor="var(--white)"
              fontFamily="Bellefair"
              fontSize="2rem"
              color="var(--darkblue)">
              {homepage.button.title}
            </LinkButton>
          </Flex>
        </Flex>
      </BackgroundImage>
    </>
  );
}

export default HomePage;

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'data.json');
  const fileData = fs.readFileSync(filePath);

  const data = JSON.parse(fileData.toString());

  return {
    props: {
      data: data,
    },
  };
}
