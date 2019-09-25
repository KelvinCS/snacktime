import styled from 'styled-components';

const Container = styled.div`
  width: 150px;
  margin: 16px 24px;
`;

const Banner = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 6px;
  transition: all 0.2s ease-out;

  &:hover {
    transform: scale(1.02);
  }
`;

const Title = styled.h1`
  font-size: 12px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-weight: normal;
  width: 100%;
  color: #212121;
  margin: 0;
  padding: 6px 0 4px 0;
`;

const Year = styled.span`
  color: #9e9e9e;
  font-size: 11px;
  display: flex;
  justify-content: flex-end;
  padding: 4px 0;
`;

export {
  Year, Title, Banner, Container,
};
