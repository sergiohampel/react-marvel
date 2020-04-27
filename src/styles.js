import { createGlobalStyle } from "styled-components";

import Roboto from "./assets/fonts/Roboto/Roboto-Regular.ttf";
import RobotoCondensed from "./assets/fonts/Roboto_Condensed/RobotoCondensed-Bold.ttf";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    outline: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  :root {
    font-size: 10px;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${Roboto});
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'RobotoCondensed';
    src: url(${RobotoCondensed});
    font-weight: 800;
    font-style: normal;
  }

  body {
    background-color: #000;
    color: #fff;
  }

  body, input, button {
    font-family: Roboto, Helvetica, sans-serif;
  }

  ul {
    list-style: none;
  }
`;
