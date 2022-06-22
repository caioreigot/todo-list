import React, { useEffect } from 'react';
import Storage from '../../storage';
import StyledAddCardModel from './style';

const TO_DO_MAX_LENGTH = 180;

const setupCloseButton = () => {
  const closeButton = document.querySelector('.close-button');
  const addCardModel = document.querySelector('.add-card-model');

  closeButton.onclick = () => {
    addCardModel.classList.add('hidden');
  }
}

const setupTextInput = () => {
  const textInput = document.querySelector('.text-input');
  const wordsLeft = document.querySelector('.words-left');

  let previousText;

  wordsLeft.innerText = `${TO_DO_MAX_LENGTH} words left`;

  textInput.addEventListener('input', () => {
    const currentText = textInput.value;
    const currentTextInputLength = currentText.length;

    if (currentTextInputLength > 180) {
      textInput.value = previousText; 
      return;
    }

    previousText = currentText;
    wordsLeft.innerText = `${TO_DO_MAX_LENGTH - currentTextInputLength} words left`;
  });
}

const implementAddButtonLogic = () => {
  const addButton = document.querySelector('.add-button');
  const textInput = document.querySelector('.text-input');
  const addCardModel = document.querySelector('.add-card-model');

  addButton.onclick = () => {
    // TODO: Trocar o "someday" para ser dinâmico
    Storage.saveToDoCard('someday', textInput.value);
    addCardModel.classList.add('hidden');
  }
}

function AddCardModel() {
  useEffect(() => {
    setupCloseButton();
    setupTextInput();
    implementAddButtonLogic();
  }, []);

  return(
    <StyledAddCardModel className="add-card-model hidden">
      <div className="container">
        <button className="close-button">&#10005;</button>
        <textarea className='text-input' type="text" placeholder="Type here" />
        <p className="words-left">180 words left</p>
        <button className="add-button">Add</button>
      </div>
    </StyledAddCardModel>
  );
}

export default AddCardModel;