import React from 'react'

import StyledCategoryMenuItem from './style';

function CategoryMenu(props) {
  return(
    <StyledCategoryMenuItem {...props}>
      {props.children}
    </StyledCategoryMenuItem>
  )
}

export default CategoryMenu;