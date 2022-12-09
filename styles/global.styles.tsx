import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    scroll-behavior: smooth;
    scroll-padding-top: 5rem;
  }

  html {
    height: 100%;
  }
  body {
    font-family: 'Roboto Mono', monospace;
    height: 100%;
    background-color: #f9fafb;

    #__next {
      height: 100%;
    }
  }
`;
