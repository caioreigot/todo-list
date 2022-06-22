import React from 'react';

import StyledToDoCard from './style';

function ToDoCard() {
  return(
    <StyledToDoCard>
      <p className="to-do-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur vero id atque optio recusandae corrupti aut vitae voluptates! Dolor, dignissimos debitis?</p>
      <img className="trash-icon" src="svg/trash-solid.svg" alt="Trash icon"></img>
      <img className="check-icon" src="svg/circle-check-solid.svg" alt="Circle check icon"></img>
    </StyledToDoCard>
  );
}

export default ToDoCard;