import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  padding: 20px;
  margin: 40px;
  top: 0%;
  background-color: #ecdff5;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
  border-style: none;
  box-shadow: 0px 10px 13px -7px #000000, 0px 1px 7px 4px rgba(0, 0, 0, 0);
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
      <Heading>🐼 Pandas 🐼 CleanMachine 🧹 🪣 🧽</Heading>
    </HeaderContainer>
  );
};

export default Header;
