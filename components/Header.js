import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  padding: 20px;
  margin: 40px;
  top: 0%;
  background-color: lightgreen;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
`;

const Heading = styled.h1`
  font-size: 36px;
  font-weight: bold;
  margin: 0;
  text-align: center;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Heading>Haushalts Retter</Heading>
    </HeaderContainer>
  );
};

export default Header;
