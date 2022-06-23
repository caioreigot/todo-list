import React, { useState } from 'react';

import StyledToDoCardsContainer from './style';
import AddToDoCard from '../AddToDoCard';
import ToDoCard from '../ToDoCard';

export let globalToDoCards;
export let globalSetToDoCards;

export const renderToDoCard = (toDoCardObject) => {
  globalSetToDoCards([...globalToDoCards, toDoCardObject]);
}

function ToDoCardsContainer() {
  const [toDoCards, setToDoCards] = useState([]);
  [globalToDoCards, globalSetToDoCards] = [toDoCards, setToDoCards];

  return(
    <StyledToDoCardsContainer className='to-do-cards'>
      <AddToDoCard />
      {
        toDoCards?.map((toDoCardObject, index) => 
          <ToDoCard 
            key={index} 
            dueDate={toDoCardObject.dueDate} 
            finished={toDoCardObject.finished}
          >
            {toDoCardObject.text}
          </ToDoCard>
        )
      }
    </StyledToDoCardsContainer>
  );
}

export default ToDoCardsContainer;