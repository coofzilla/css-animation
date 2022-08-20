import * as styled from 'styled-components/';

export const GlobalStyle = styled.createGlobalStyle`
  :root {
    --primary-color: grey;
    --fg-color: white;
    --duration: 2s;
    --easing: cubic-bezier(0.5, 0, 0.5, 1);
  }

  body {
    font-family: 'Open Sans', sans-serif;
    padding: 5vmin;
    background-color: var(--primary-color);
    color: var(--fg-color);
  }
`;
