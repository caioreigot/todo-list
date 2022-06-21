import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Ubuntu', 'Roboto', sans-serif;
    font-size: 24px;
  }

  html, body, #root {
    height: 100%;
  }

  #root {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5%;
    background-color: var(--medium-purple);
    color: #fff;
  }

  .hidden {
    display: none !important;
  }

  .active {
    background-color: #666;
  }

  :root {
    --medium-purple: #928ef4;
    --light-purple: #bbb8fb;
  }
`;

export default GlobalStyles;