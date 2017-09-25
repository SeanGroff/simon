// @flow
import type { NextTurnAction } from './actionTypes';
import { NEXT_TURN } from './constants';

type Action = NextTurnAction;

type Args = {
  turn: number,
  counter: number,
};

export const nextTurnAction = (payload: boolean): Action => ({
  type: NEXT_TURN,
  payload,
});

export function nextTurnThunk() {
  return (dispatch: *, getState: *) => {
    const { turn, counter }: Args = getState();
    setTimeout(() => {
      dispatch(nextTurnAction(!turn));
    }, counter * 1000);
  };
}
