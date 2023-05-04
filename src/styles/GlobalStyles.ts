import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: #1c1e21;
    color: #fff;
    font-family: "Inter", sans-serif;
  }
  
  button {
    cursor: pointer;
    text-align: center;
    padding: 5px;
    color: #fff;
    font-weight: 600;
    background-color: #418dff;
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 8px;
    padding: 8px;
    height: 3rem;
    width: 6rem;
    font-size: 1rem;

    &:hover {
      opacity: 0.8;
    }

    &:focus {
      outline: none;
    }
  }

select {
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
