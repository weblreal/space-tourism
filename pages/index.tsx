// Modules
import React from "react";
import fs from "fs";
import path from "path";

// Components
import { Header } from "@/components/UI/Header/Header";
import { Nav } from "@/components/UI/Nav/Nav";
import { HorizontalLine } from "@/components/UI/HorizontalLine/HorizontalLine";
import { BackgroundImage } from "@/components/UI/BackgroundImage/BackgroundImage";
import Navbar from "@/components/Navbar/Navbar";
import MainText from "@/components/MainText/MainText";
import { Flex } from "@/components/UI/Flex/Flex";
import LinkButton from "@/components/UI/LinkButton/LinkButton";
import Container from "@/components/Container/Container";

// Assets
import Logo from "../public/assets/shared/logo.svg";

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
              margin: "0 4rem 0 3.4375rem",
              "z-index": "3",
            }}
          />
          <HorizontalLine width={["10%", "20%", "25%", "29%"]} />
          <Nav>{<Navbar navigation={navigation} />}</Nav>
        </Header>
        <Flex justifyContent="center">
          <Container
            alignItems="flex-end"
            justifyContent="space-between"
            width="70rem">
            <MainText homepage={homepage} />
            <LinkButton
              justifyContent="center"
              alignItems="center"
              href="#"
              variant="mainButton"
              color="var(--darkblue)">
              {homepage.button.title}
            </LinkButton>
          </Container>
        </Flex>
      </BackgroundImage>
    </>
  );
}

export default HomePage;

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "data.json");
  const fileData = fs.readFileSync(filePath);

  const data = JSON.parse(fileData.toString());

  return {
    props: {
      data: data,
    },
  };
}
