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

    -webkit-box-shadow: 3px 3px 2px 0px rgba(0,0,0,0.5);
    box-shadow: 3px 3px 2px 0px rgba(0,0,0,0.5);

    > .due-date-text {
      position: absolute;
      left: 15px;
      top: 15px;

      font-size: 20px;
    }

    > .to-do-text {
      text-align: center;
      overflow-wrap: break-word;
      width: calc(300px + 10vw);
    }

    > .to-do-text.finished {
      text-decoration: line-through;
      filter: brightness(0.85);
    }

    > img {
      -webkit-user-drag: none;
      position: absolute;
      width: 40px;
      height: 40px;
    }

    > img:hover {
      cursor: pointer;
      filter: brightness(1.1);
    }

    > .trash-icon {
      fill: red;
      bottom: 20px;
      left: 25px;
    }

    > .check-icon {
      bottom: 20px;
      right: 25px;
    }
  }

  @media (max-width: 450px) {
    & {
      min-width: 0;
    }

    > .to-do-text {
      width: calc(220px);
    }
  }
`;

export default StyledToDoCard;