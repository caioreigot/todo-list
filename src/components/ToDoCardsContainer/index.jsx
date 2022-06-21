import React from 'react';

import StyledToDoCardsContainer from './style';
import AddToDoCard from '../AddToDoCard';
import ToDoCard from '../ToDoCard';

function ToDoCardsContainer() {
  return(
    <StyledToDoCardsContainer className='to-do-cards'>
      <AddToDoCard />
      <ToDoCard />
      <ToDoCard />
      <ToDoCard />
      <ToDoCard />
      <ToDoCard />
      <ToDoCard />
    </StyledToDoCardsContainer>
  );
}

export default ToDoCardsContainer;