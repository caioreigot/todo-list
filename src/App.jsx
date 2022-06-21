import StyledApp from './App.style';

import ToDoCards from './components/ToDoCards';
import CategoryMenuItem from './components/CategoryMenuItem';

function App() {
  return(
    <StyledApp>
      <ToDoCards />
      <CategoryMenuItem className='menu-item-1 active'>Someday</CategoryMenuItem>
      <CategoryMenuItem className='menu-item-2'>Today</CategoryMenuItem>
      <CategoryMenuItem className='menu-item-3'>Tomorrow</CategoryMenuItem>
      <CategoryMenuItem className='menu-item-4'>Custom</CategoryMenuItem>
    </StyledApp>
  );
}

export default App;