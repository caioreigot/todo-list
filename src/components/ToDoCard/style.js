import styled from "styled-components";

const StyledToDoCard = styled.div`
  & {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 350px;
    flex-grow: 1;
    height: 400px;

    background-color: var(--card-background-color);

    margin: 6px;
    padding: 20px;

    overflow-y: auto;
    overflow-x: hidden;

    border: none;
    border-radius: 6px;

    -webkit-box-shadow: 0px 2px 7px 0px rgba(0,0,0,0.5); 
    box-shadow: 3px 3px 4px 0px rgba(0,0,0,0.5);

    p {
      text-align: center;
      overflow-wrap: break-word;
      width: calc(500px - 4vw);
    }

    p.finished {
      text-decoration: line-through;
    }
  }
`;

export default StyledToDoCard;