import React, { useEffect } from 'react';

import StyledAddToDoCard from './style';

function AddToDoCard() {
  useEffect(() => {
    const addCardButton = document.querySelector('.add-card-button');
    const addCardModel = document.querySelector('.add-card-model');
    
    addCardButton.onclick = () => {
      addCardModel.classList.remove('hidden');
    }
  }, []);

  return(
    <StyledAddToDoCard className="add-card-button">
      &#43;
    </StyledAddToDoCard>
  );
}

export default AddToDoCard;