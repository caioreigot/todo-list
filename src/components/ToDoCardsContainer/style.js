import styled from "styled-components";

import { baseVerticalScroll } from '../../GlobalStyles.style';

const StyledToDoCardsContainer = styled.div`
  & {
    grid-area: to-do-cards;

    display: flex;
    flex-direction: row;
    flex-flow: wrap;
    
    height: 100%;
    padding: 16px;
    overflow-y: auto;

    ${baseVerticalScroll};
  }
`;

export default StyledToDoCardsContainer;