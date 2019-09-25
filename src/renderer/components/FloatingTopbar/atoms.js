import styled from 'styled-components';

export const Container = styled.div`
  height: 1px;
  position: relative;
  width: 100%;
  z-index: 2;
`;

export const TransparentBar = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  padding: 16px;
  background-color: rgba(255, 255, 255, 0.97);
`;
