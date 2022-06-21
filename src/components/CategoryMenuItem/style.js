import styled from "styled-components";

const StyledCategoryMenuItem = styled.div`
  & {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 20px;

    font-size: 20px;
    
    cursor: pointer;
    user-select: none;
    background-color: #444;

    :hover {
      background-color: #666;
    }
  }
`;

export default StyledCategoryMenuItem;