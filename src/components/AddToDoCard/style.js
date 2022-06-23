import styled from "styled-components";

const StyledAddToDoCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  user-select: none;

  min-width: 350px;
  flex-grow: 1;
  height: 400px;

  background-color: var(--card-background-color);

  margin: 6px;
  padding: 20px;

  font-size: 80px;

  border: none;
  border-radius: 6px;

  -webkit-box-shadow: 3px 3px 2px 0px rgba(0,0,0,0.5);
  box-shadow: 3px 3px 2px 0px rgba(0,0,0,0.5);

  :hover {
    cursor: pointer;
    filter: brightness(1.15);
  }

  :active {
    filter: brightness(1.2);
  }
`;

export default StyledAddToDoCard;