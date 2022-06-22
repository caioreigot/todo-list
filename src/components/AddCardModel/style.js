import styled from "styled-components";

import { baseVerticalScroll } from "../../GlobalStyles.style";

const StyledAddCardModel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, .65);

  > .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: relative;

    width: 90%;
    max-width: 700px;
    height: 400px;

    background-color: var(--card-background-color);
    padding: 20px;

    overflow: hidden;

    border: none;
    border-radius: 6px;

    -webkit-box-shadow: 0px 2px 7px 0px rgba(0,0,0,0.5); 
    box-shadow: 3px 3px 4px 0px rgba(0,0,0,0.5);
  }

  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;

    cursor: pointer;

    width: 40px;
    height: 40px;

    font-size: 20px;

    border: none;
    border-radius: 50%;

    background-color: var(--medium-purple);
    color: #fff;

    :hover {
      filter: brightness(1.1);
    }
  }

  .text-input {
    width: 100%;
    height: 100%;

    padding: 10px;
    margin-top: 40px;

    color: #fff;
    border: none;
    resize: none;
    background-color: var(--card-background-color);

    outline: none !important;

    ${baseVerticalScroll};

    ::-webkit-input-placeholder {
      color: #bbb8fb;
    }
    
    ::-webkit-scrollbar-thumb,
    ::-webkit-scrollbar-thumb:hover {
      background: #bbb8fb;
    }
  }

  .words-left {
    width: 100%;
    text-align: right;
    margin-top: 10px;
  }

  .add-button {
    width: 100%;
    margin-top: 10px;
    padding: 20px;

    cursor: pointer;

    border: none;
    border-radius: 6px;

    background-color: var(--medium-purple);
    color: #fff;

    :hover {
      filter: brightness(1.1);
    }
  }
`;

export default StyledAddCardModel;