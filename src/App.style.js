import styled from 'styled-components';

const StyledApp = styled.div`
  .menu-item-1 {
    grid-area: menu-item-1;
  }

  .menu-item-2 {
    grid-area: menu-item-2;
  }

  .menu-item-3 {
    grid-area: menu-item-3;
  }

  .menu-item-4 {
    grid-area: menu-item-4;
  }

  & {
    display: grid;
    grid-template-rows: repeat(4, 1fr);
    grid-template-columns: 85% 15%;

    grid-template-areas:
      'to-do-cards menu-item-1'
      'to-do-cards menu-item-2'
      'to-do-cards menu-item-3'
      'to-do-cards menu-item-4';

    border: none;
    border-radius: 10px;

    background-color: var(--light-purple);
  }

  // Se a largura da tela for <= a 900px, a grid terá 4 colunas e 2 linhas
  @media (max-width: 900px) {
    grid-template-rows: 15% 1fr;
    grid-template-columns: repeat(4, 1fr);

    grid-template-areas:
      'menu-item-1 menu-item-2 menu-item-3 menu-item-4'
      'to-do-cards to-do-cards to-do-cards to-do-cards';

    .to-do-cards {
      margin-top: 20px;
    }
  }
`;

export default StyledApp;