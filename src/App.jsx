import { useEffect, useState } from 'react';
import StyledMainContainer from './App.style';

import ToDoCardsContainer from './components/ToDoCardsContainer';
import AddCardModel from './components/AddCardModel';
import CategoryMenuItem from './components/CategoryMenuItem';
import Storage from './storage';

export let updateMenuItemsQuantity;

function App() {
  const [menuItemsQuantity, setMenuItemsQuantity] = useState({
    someday: 0,
    today: 0,
    tomorrow: 0,
    custom: 0
  });

  const setOnClickAndShowCards = () => {
    const menuItems = [...document.querySelectorAll('.menu-item')];
    const toDoTimeContext = Storage.getToDoTimeContext();
    let currentMenuItemSelected = document.querySelector(`.menu-item.${toDoTimeContext}`);

    currentMenuItemSelected.classList.add('selected');

    menuItems.forEach(menuItem => {
      menuItem.onclick = () => {
        currentMenuItemSelected.classList.remove('selected');
        menuItem.classList.add('selected');
        currentMenuItemSelected = menuItem;
      }
    });

    Storage.changeToDoTimeContext(toDoTimeContext);
  }

  updateMenuItemsQuantity = () => {
    const savedData = Storage.getSavedData();

    const menuItemsQuantity = {
      someday: savedData.someday.length,
      today: savedData.today.length,
      tomorrow: savedData.tomorrow.length,
      custom: savedData.custom.length
    }

    setMenuItemsQuantity(menuItemsQuantity);
  }

  useEffect(() => {
    setOnClickAndShowCards();
    updateMenuItemsQuantity();
  }, []);

  return(
    <>
      <StyledMainContainer>
        <ToDoCardsContainer />
        <CategoryMenuItem 
          className='menu-item someday'
          quantity={menuItemsQuantity.someday}
          onClick={() => Storage.changeToDoTimeContext('someday')}>
            Someday
        </CategoryMenuItem>
        <CategoryMenuItem 
          className='menu-item today' 
          quantity={menuItemsQuantity.today}
          onClick={() => Storage.changeToDoTimeContext('today')}>
            Today
        </CategoryMenuItem>
        <CategoryMenuItem 
          className='menu-item tomorrow' 
          quantity={menuItemsQuantity.tomorrow}
          onClick={() => Storage.changeToDoTimeContext('tomorrow')}>
            Tomorrow
        </CategoryMenuItem>
        <CategoryMenuItem 
          className='menu-item custom' 
          quantity={menuItemsQuantity.custom}
          onClick={() => Storage.changeToDoTimeContext('custom')}>
            Custom
        </CategoryMenuItem>
      </StyledMainContainer>

      <AddCardModel />
    </>
  );
}

export default App;