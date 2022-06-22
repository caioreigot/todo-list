import styled from "styled-components";

const StyledToDoCard = styled.div`
  & {
    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;

    min-width: 350px;
    flex-grow: 1;
    height: 400px;

    background-color: var(--card-background-color);

    margin: 6px;
    padding: 20px;

    overflow: hidden;

    border: none;
    border-radius: 6px;

    -webkit-box-shadow: 0px 2px 7px 0px rgba(0,0,0,0.5); 
    box-shadow: 3px 3px 4px 0px rgba(0,0,0,0.5);

    > .to-do-text {
      text-align: center;
      overflow-wrap: break-word;
      width: calc(500px - 4vw);
    }

    > .to-do-text.finished {
      text-decoration: line-through;
      filter: brightness(0.85);
    }

    > img {
      -webkit-user-drag: none;
      position: absolute;
      width: 30px;
      height: 30px;
    }

    > img:hover {
      cursor: pointer;
      filter: brightness(1.1);
    }

    > .trash-icon {
      fill: red;
      bottom: 15px;
      right: 15px;
    }

    > .check-icon {
      bottom: 15px;
      right: 55px;
    }
  }
`;

export default StyledToDoCard;