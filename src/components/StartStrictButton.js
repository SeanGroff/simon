// @flow
import React from 'react';
import styled from 'styled-components';

type Props = {
  startGameThunk(): any,
  playSequenceThunk(): any,
  toggleStrictMode(): { type: string },
  startButton: boolean,
  disabled: number | boolean,
};

const StyledButton = styled.button`
  border-radius: 100%;
  width: 20px;
  height: 20px;
  border: 4px solid #222222;
  background: ${({ startButton }: Props) =>
    startButton ? '#FC0102' : 'yellow'};
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

export default function StartStrictButton({
  startGameThunk,
  playSequenceThunk,
  toggleStrictMode,
  startButton,
  disabled,
}: Props) {
  const handleClick = () => {
    if (startButton) {
      startGameThunk();
      playSequenceThunk();
    } else {
      toggleStrictMode();
    }
  };

  return (
    <StyledButton
      disabled={disabled}
      startButton={startButton}
      onClick={handleClick}
    />
  );
}
