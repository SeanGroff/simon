// @flow
import React from 'react';
import styled from 'styled-components';

type Props = {
  startButton: boolean,
  disabled: number | boolean,
  startGame(): { type: string },
  playSequenceThunk(): any,
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

export default function startStrictButton(props: Props) {
  const clickHandler = () => {
    if (props.startButton) {
      props.startGame();
      props.playSequenceThunk();
    } else {
      /**
       * @todo strictGame()
       */
    }
  };
  return <StyledButton onClick={clickHandler} {...props} />;
}
