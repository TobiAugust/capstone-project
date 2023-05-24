import styled from "styled-components";

export default function Button({ text, onClick }) {
  return <StyledButton onClick={onClick}>{text}</StyledButton>;
}

const StyledButton = styled.button`
  all: unset;
  cursor: pointer;
  padding: 1rem;
  color: black;
  background-color: orange;
`;
