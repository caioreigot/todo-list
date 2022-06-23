import React, { useEffect, useRef } from 'react';
import Storage from '../../storage';

import StyledToDoCard from './style';

function ToDoCard(props) {
  const toDoCard = useRef(null);

  useEffect(() => {
    const thisToDoTextParagraph = toDoCard.current.querySelector('.to-do-text');
    const thisTrashIcon = toDoCard.current.querySelector('.trash-icon');
    const thisCheckIcon = toDoCard.current.querySelector('.check-icon');

    if (props.finished) {
      thisToDoTextParagraph.classList.add('finished');
    }

    thisTrashIcon.onclick = () => {
      Storage.deleteToDoCard(thisToDoTextParagraph.innerText);
    }
    
    thisCheckIcon.onclick = () => {
      thisToDoTextParagraph.classList.toggle('finished');
      Storage.toggleToDoFinishedStatus(thisToDoTextParagraph.innerText);
    }
  }, [props.finished]);

  return(
    <StyledToDoCard ref={toDoCard}>
      {props.dueDate && 
        <p className="due-date-text">Due Date: {props.dueDate}</p>
      }
      <p className="to-do-text">{props.children}</p>
      <img className="trash-icon" src="svg/trash-solid.svg" alt="Trash icon"></img>
      <img className="check-icon" src="svg/circle-check-solid.svg" alt="Circle check icon"></img>
    </StyledToDoCard>
  );
}

export default ToDoCard;