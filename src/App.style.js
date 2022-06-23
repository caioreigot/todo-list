import styled from 'styled-components';

const StyledMainContainer = styled.div`
  .menu-item.someday {
    grid-area: menu-item-1;
  }

  .menu-item.today {
    grid-area: menu-item-2;
  }

  .menu-item.tomorrow {
    grid-area: menu-item-3;
  }

  .menu-item.custom {
    grid-area: menu-item-4;
  }

  & {
    display: grid;
    grid-template-rows: repeat(4, 25%);
    grid-template-columns: 85% 15%;

    height: 100%;
    width: 100%;

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
    & {
      grid-template-rows: 90px 1fr;
      grid-template-columns: repeat(4, 25%);

      grid-template-areas:
        'menu-item-1 menu-item-2 menu-item-3 menu-item-4'
        'to-do-cards to-do-cards to-do-cards to-do-cards';
    }

    .to-do-cards {
      padding: 6px 12px;
    }
  }

  @media (min-width: 1400px) {
    & {
      grid-template-columns: 88% 12%;
    }
  }
`;

export default StyledMainContainer;