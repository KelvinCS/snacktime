import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 200px;
  padding: 6px 12px;
  border: 1px solid #eee;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 20px;
`;

const CustomInput = styled.input`
  border: none;
  outline: none;
  background-color: #f5f5f5;
  flex: 1;
  font-size: 13px;
  color: #656565;

  &::placeholder {
    color: #bdbdbd;
  }
`;

const Icon = styled.img`
  height: 14px;
  width: 14px;
`;

type Props = {
  placeholder: string,
  icon: string,
  onFocus: () => any,
  onBlur: () => any,
  onChange: () => any,
};

const getBorderColor = focus => (focus ? '#bdbdbd' : '#eee');

const RoundInput = (props: Props) => {
  const [focus, setFocus] = useState(false);

  return (
    <Container id="container" style={{ borderColor: getBorderColor(focus) }}>
      <CustomInput
        {...props}
        onFocusCapture={() => setFocus(true)}
        onBlurCapture={() => setFocus(false)}
      ></CustomInput>
      <Icon src={props.icon}></Icon>
    </Container>
  );
};

export default RoundInput;
