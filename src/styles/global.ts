import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: 0;

  }

  :root {
    font-size: clamp(40%, 1% + 2vw, 62.5%);
  }

  :focus {
    outline: 0;
    box-sizing: 0 0 0 2px ${({theme}) => theme['green-500']};
  }

  body {
    font-size: 1.6rem;
    background-color: ${({theme}) => theme['gray-900']};
    color: ${props => props.theme['gray-300']}
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    
  }

`