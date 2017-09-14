// @flow
import React from 'react';
import styled from 'styled-components';

type Props = {
  startButton: boolean,
  power: boolean,
};

const StyledButton = styled.button`
  border-radius: 100%;
  width: 20px;
  height: 20px;
  border: 4px solid #222222;
  background: ${(props: Props) => (props.startButton ? '#FC0102' : 'yellow')};
  margin: auto;
  padding: 10px;
  position: relative;
  top: -5px;
  box-shadow: 0 2px 3px #222;

  &:hover {
    cursor: pointer;
  }

  &:active {
    top: -4px;
    box-shadow: 0 1px 1px #292929;
  }
`;

const StartStrictButton = (props: Props) => {
  const clickHandler = () => console.log('click!');
  return (
    <StyledButton disabled={!props.power} onClick={clickHandler} {...props} />
  );
};

StartStrictButton.defaultProps = {
  startButton: true,
};

export default StartStrictButton;
