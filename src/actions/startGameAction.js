// @flow
import type { StartGameAction } from './actionTypes';
import { START_GAME } from './constants';
import { nextTurnAction } from './nextTurnAction';
import { getRandomNumber } from '../utils/logic';

type Action = StartGameAction;

type Args = {
  playerTurn: number,
  counter: number,
};

export const startGameAction = (randomNumber: number): Action => ({
  type: START_GAME,
  payload: randomNumber,
});

export function startGameThunk() {
  return (dispatch: *, getState: *) => {
    const { playerTurn, counter }: Args = getState();

    dispatch(startGameAction(getRandomNumber()));

    setTimeout(() => {
      dispatch(nextTurnAction(!playerTurn));
    }, counter * 1000);
  };
}
