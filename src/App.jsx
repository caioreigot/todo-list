import StyledApp from './App.style';

import ToDoCardsContainer from './components/ToDoCardsContainer';
import CategoryMenuItem from './components/CategoryMenuItem';

function App() {
  return(
    <StyledApp>
      <ToDoCardsContainer />
      <CategoryMenuItem className='menu-item-1 active'>Someday</CategoryMenuItem>
      <CategoryMenuItem className='menu-item-2'>Today</CategoryMenuItem>
      <CategoryMenuItem className='menu-item-3'>Tomorrow</CategoryMenuItem>
      <CategoryMenuItem className='menu-item-4'>Custom</CategoryMenuItem>
    </StyledApp>
  );
}

export default App;