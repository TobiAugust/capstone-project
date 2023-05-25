import styled from "styled-components";

export default function Button({ text, onClick }) {
  return <StyledButton onClick={onClick}>{text}</StyledButton>;
}

const StyledButton = styled.button`
  cursor: pointer;

  color: black;
  background-color: orange;
`;
