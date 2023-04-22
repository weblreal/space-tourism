import React from 'react';

function HomePage() {
  return (
    <>
      <Header>
        <Logo />
        <HorizontalLine />
        <Nav>
          <GradientBackground>
            <NavItem>
              <NavNumber />
              <NavText />
            </NavItem>
            <NavItem></NavItem>
            <NavItem></NavItem>
            <NavItem></NavItem>
          </GradientBackground>
        </Nav>
      </Header>
    </>
  );
}

export default HomePage;
