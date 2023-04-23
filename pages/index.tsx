import { Header } from '@/components/UI/Header/Header';
import { HorizontalLine } from '@/components/UI/HorizontalLine/HorizontalLine';
import { Nav } from '@/components/UI/Nav/Nav';
import { NavItem } from '@/components/UI/NavItem/NavItem';
import { NavText } from '@/components/UI/NavText/NavText';
import path from 'path';
import fs from 'fs';
import React from 'react';
import Logo from '../public/assets/shared/logo.svg';
import Link from 'next/link';
import { BackgroundImage } from '@/components/UI/BackgroundImage/BackgroundImage';

interface INav {
  count: string;
  name: string;
}

// CREATE A COMPONENT
function HomePage(props: any) {
  const { navigation, homepage } = props.data;
  const backgroundImage = homepage.images.landscape;

  //! MAKE IT DRY
  const renderedNav = navigation.map((item: INav) => (
    <NavItem key={item.count}>
      <NavText
        href={item.name === 'Home' ? '/' : item.name}
        color="var(--white)"
        fontFamily="BarlowCondensed">
        {item.count}
      </NavText>
      <NavText
        href={item.name === 'Home' ? '/' : item.name}
        fontFamily="BarlowCondensed"
        color="var(--white)">
        {item.name}
      </NavText>
    </NavItem>
  ));
  return (
    <>
      <BackgroundImage
        backgroundImage={`url(${backgroundImage})`}
        minHeight="56.25rem"
        maxWidth="100vw">
        <Header
          width="100vw"
          height="6rem"
          mt="2.5rem"
          display="flex"
          alignItems="center"
          justifyContent="space-between">
          <Logo style={{ margin: '0 4rem 0 3.4375rem' }} />
          <HorizontalLine
            width="29.563rem"
            height=" 0.063rem"
            backgroundColor="var(--white)"
          />
          <Nav>{renderedNav}</Nav>
        </Header>
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
