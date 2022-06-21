import StyledMainContainer from './App.style';

import ToDoCardsContainer from './components/ToDoCardsContainer';
import AddCardModel from './components/AddCardModel';
import CategoryMenuItem from './components/CategoryMenuItem';

function App() {
  return(
    <>
      <StyledMainContainer>
        <ToDoCardsContainer />
        <CategoryMenuItem className='menu-item-1 active'>Someday</CategoryMenuItem>
        <CategoryMenuItem className='menu-item-2'>Today</CategoryMenuItem>
        <CategoryMenuItem className='menu-item-3'>Tomorrow</CategoryMenuItem>
        <CategoryMenuItem className='menu-item-4'>Custom</CategoryMenuItem>
      </StyledMainContainer>

      {/* <AddCardModel /> */}
    </>
  );
}

export default App;