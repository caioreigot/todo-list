import { 
  renderToDoCard, 
  globalSetToDoCards 
} from './components/ToDoCardsContainer';

import { updateMenuItemsQuantity } from './App';

class Storage {
  static knownTimes = ['someday', 'today', 'tomorrow', 'custom'];

  static saveAndRenderToDoCard = (forWhen, text, dueDate) => {
    if (!this.knownTimes.includes(forWhen.toLowerCase())) {
      console.error(
        'storage.js -> saveToDoCard() -> "forWhen" fornecido não é valido.'
      );

      return;
    }

    const cardObject = { text, finished: false };
    
    if (dueDate) {
      const dateFormatted = dueDate.replaceAll('-', '/');
      cardObject['dueDate'] = dateFormatted;
    }

    const savedData = this.getSavedData();
    savedData[forWhen].push(cardObject);

    renderToDoCard(cardObject);

    localStorage.setItem('savedData', JSON.stringify(savedData));
  }

  static changeToDoTimeContext = (forWhen) => {
    if (!this.knownTimes.includes(forWhen.toLowerCase())) {
      console.error(
        'storage.js -> changeToDoTimeContext() -> "forWhen" fornecido não é valido.'
      );
      
      return;
    }

    localStorage.setItem('toDoTimeContext', forWhen);
    const savedData = this.getSavedData();
    const currentContextSavedData = savedData[forWhen];
    globalSetToDoCards(currentContextSavedData);
  }

  static getToDoTimeContext = () => {
    return localStorage.getItem('toDoTimeContext') || 'someday';
  }

  static getSavedData = () => {
    const savedDataJson = localStorage.getItem('savedData');

    if (!savedDataJson) {
      return {
        someday: [],
        today: [],
        tomorrow: [],
        custom: []
      };
    }

    return JSON.parse(savedDataJson);
  }

  static deleteToDoCard = (toDoText) => {
    const timeContext = this.getToDoTimeContext();
    const savedData = this.getSavedData();
    let timeContextSavedData = savedData[timeContext];
    
    // Remove o To Do correspondente
    timeContextSavedData = timeContextSavedData.filter(data => data.text !== toDoText);

    delete savedData[timeContext];
    savedData[timeContext] = timeContextSavedData;
    
    localStorage.setItem('savedData', JSON.stringify(savedData));
    globalSetToDoCards(timeContextSavedData);
    updateMenuItemsQuantity();
  }

  static toggleToDoFinishedStatus = (toDoText) => {
    const timeContext = this.getToDoTimeContext();
    const savedData = this.getSavedData();
    let timeContextSavedData = savedData[timeContext];
    
    const correspondingToDo = timeContextSavedData.find(data => data.text === toDoText);
    correspondingToDo.finished = !correspondingToDo.finished;
    
    // Remove o To Do correspondente para depois coloca-lo denovo, só que atualizado
    timeContextSavedData = timeContextSavedData.filter(data => data.text !== toDoText);
    timeContextSavedData.push(correspondingToDo);

    delete savedData[timeContext];
    savedData[timeContext] = timeContextSavedData;
    
    localStorage.setItem('savedData', JSON.stringify(savedData));
  }
}

export default Storage;