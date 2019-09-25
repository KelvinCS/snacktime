import styled from 'styled-components';
import React from 'react';

export const Container = styled.div`
  height: 100vh;
  width: 250px;
  background-color: #fff;
  border-right: 1px solid #eee;
`;

const Item = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0px 16px 0px 30px;
  margin: 16px 0;

  span {
    font-size: 12px;
    color: #bdbdbd;
    font-weight: 600;
  }

  img {
    height: 18px;
    width: 18px;
    margin-right: 8px;
  }
`;

const ItemSelected = styled(Item)`
  border-left: 4px solid #212121;
  padding-left: 25px;

  span {
    color: #212121;
  }
`;

type MenuItemProps = {
  selected: Boolean,
};

export const MenuItem = (props: MenuItemProps) => (
  <>{props.selected ? <ItemSelected {...props}></ItemSelected> : <Item {...props}></Item>}</>
);

export const Header = styled(Item)`
  margin-top: 24px;
  span {
    text-transform: uppercase;
    font-weight: 400;
    width: 100%;
    padding: 12px 0;
    border-bottom: 1px solid #eee;
  }
`;
