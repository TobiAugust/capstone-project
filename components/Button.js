import styled from "styled-components";

export default function Button({ text, onClick }) {
  return <StyledButton onClick={onClick}>{text}</StyledButton>;
}

const StyledButton = styled.button`
  cursor: pointer;
  color: black;
  background-color: lightgreen;
  border-radius: 20px;
  padding: 10px 20px;
  margin-right: 10px;
  font-size: 16px;
`;
