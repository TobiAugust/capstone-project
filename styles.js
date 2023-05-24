import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  h1{
    background
  }

  body {
    margin: 0;
    font-family: system-ui;
  }

  .container{
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    justify-content: space-between,
  }

  header,
  footer{
    background-color: #f2f2f2
    padding: 20 px;
  }

  main{
    flex-grow: 1;
    padding: 20px;
  }
`;
