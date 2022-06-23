import React from 'react';

import StyledCategoryMenuItem from './style';

function CategoryMenu(props) {
  return(
    <StyledCategoryMenuItem {...props}>
      <div className='to-do-quantity'>{props.quantity || 0}</div>
      {props.children}
    </StyledCategoryMenuItem>
  );
}

export default CategoryMenu;