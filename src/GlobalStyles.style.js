import { createGlobalStyle, css } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Ubuntu', sans-serif;
    font-size: 24px;
  }

  html, body, #root {
    height: 100%;
  }

  #root {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3% 5%;
    background-color: var(--medium-purple);
    color: #fff;
  }

  .hidden {
    display: none !important;
  }

  .selected {
    filter: brightness(1.4);
  }

  :root {
    --card-background-color: #7370c2;
    --darker-purple: #464475;
    --medium-purple: #928ef4;
    --light-purple: #bbb8fb;
  }
`;

export const baseVerticalScroll = css`
  ::-webkit-scrollbar {
    width: 20px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: #7370c292;
    background-clip: padding-box;
    border: 4px solid rgba(0, 0, 0, 0);
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #7370c2;
  }
`;

export default GlobalStyles;