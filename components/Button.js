import styled from "styled-components";

export default function Button({ text, onClick }) {
  return <StyledButton onClick={onClick}>{text}</StyledButton>;
}

const StyledButton = styled.button`
  cursor: pointer;
  color: black;
  background-color: #b37dcf;
  border-radius: 20px;
  padding: 10px 20px;
  margin-right: 10px;
  margin-top: 5px;
  font-size: 16px;
  border-style: none;
  box-shadow: 0px 3px 0px 2px #c69ddd;
`;
