// @flow
import React from 'react';
import styled from 'styled-components';

type Props = {
  close: any,
  victorious: boolean,
  score: ?number,
};

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: black;
  color: white;
  text-transform: capitalize;
  :hover {
    cursor: pointer;
  }
`;

const GameStateText = styled.div`
  font-size: 48px;
  margin-bottom: 20px;
`;

const ScoreText = styled.div`font-size: 24px;`;

export default function GameOverScreen({ close, victorious, score }: Props) {
  const scoreNumber = score ? score - 1 : 0;
  return (
    <Modal onClick={close}>
      <GameStateText>{victorious ? 'You Win!' : 'Game Over!'}</GameStateText>
      <ScoreText>{`Score: ${scoreNumber}`}</ScoreText>
    </Modal>
  );
}
