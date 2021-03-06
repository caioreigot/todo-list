import styled from "styled-components";

const StyledCategoryMenuItem = styled.div`
  & {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 20px;

    position: relative;

    border-top: 1px solid var(--light-purple);
    border-bottom: 1px solid var(--light-purple);

    font-size: 20px;
    
    cursor: pointer;
    user-select: none;
    background-color: var(--darker-purple);

    :hover {
      filter: brightness(1.4);
    }
  }

  & > .to-do-quantity {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 25px;
    width: 25px;

    position: absolute;
    right: 5%;
    top: 5%;

    border: none;
    border-radius: 50%;

    color: var(--darker-purple);
    font-size: 18px;
    text-align: center;

    background-color: var(--light-purple);
  }

  @media (max-width: 900px) {
    & {
      border-top: none;
      border-bottom: none;
      border-left: 1px solid var(--light-purple);
      border-right: 1px solid var(--light-purple);
    }
  }

  @media (max-width: 550px) {
    & {
      font-size: 16px;
    }

    & > .to-do-quantity {
      height: 20px;
      width: 20px;
      font-size: 16px;
    }
  }
`;

export default StyledCategoryMenuItem;