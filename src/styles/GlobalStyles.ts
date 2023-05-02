import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: #222;
    color: #fff;
    font-family: Arial, sans-serif;
  }
  
  button {
    background-color: #4caf50;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: #3e8e41;
    }

    &:focus {
      outline: none;
    }
  }

  input[type="text"],
  input[type="date"],
  input[type="number"] {
    background-color: #333;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px;
    margin: 0 10px 20px 0;
    width: 200px;
    font-size: 16px;

    &:focus {
      outline: none;
      box-shadow: 0 0 3px 1px #4caf50;
    }
  }
`;
