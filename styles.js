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

    .container {
      max-width: 800px;
      margin: 0 auto;
      padding: 40px;
      text-align: center;
    }


    
    

  .input-box {
    text-align: left;
    margin-bottom: 20px;
  }

  form div {
    margin-bottom: 10px;
  }

  label {
    display: block;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 5px;
  }

  input {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border-radius: 30px;
    background-color: lightgrey;
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
  
  footer {
    flex-shrink: 0;
    background-color: lightgreen;
    padding: 10px;
    text-align: center;
  }
  button[type="button"][data-action="delete"] {
    background-color: red;
  }

  button[type="button"][data-action="edit"] {
    background-color: lightblue; 
  }
`;
