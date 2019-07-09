import styled from 'styled-components';

const Grid = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
`;

const Item = styled.div`
  flex: 0 0 auto;
`;

Grid.Item = Item;

export default Grid;
