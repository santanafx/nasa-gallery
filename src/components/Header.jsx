import React from "react";
import { Container, NavOpts, SectionContainer } from "./Header.styled";

export const Header = () => {
  return (
    <Container>
      <SectionContainer>
        <div>
          <img src="images/nasa-logo.png" alt="" />
        </div>
        <nav>
          <NavOpts href="/#">Home</NavOpts>
          <NavOpts href="/#">APOD</NavOpts>
          <NavOpts href="/#">Mars Rover</NavOpts>
        </nav>
      </SectionContainer>
    </Container>
  );
};
