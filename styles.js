import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  
  }
  body {
    margin: 0;
    font-family: system-ui;
    background-color: lightcoral;
  }

  

 

  input {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border-radius: 30px;
    background-color: lightgrey;
  }

  button {
    padding: 10px 20px;
    margin-right: 10px;
    font-size: 16px;
    border-radius: 20px;
  }

  .submitted-data {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 20px;
    margin-top: 20px;
  }

  footer {
    margin-top: 40px;
    position: sticky;
    bottom: 0;
    background-color: lightgreen;
    width: 100%;
    flex-shrink: 0;
    background-color: lightgreen;
    padding: 10px;
    text-align: center;
  }

  footer p {
    font-size: 14px;
  }

  footer a {
    color: #333;
  }
  .container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  
  section {
    flex: 1;
  }
`;
