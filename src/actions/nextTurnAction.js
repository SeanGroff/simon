// @flow
import type { NextTurnAction } from './actionTypes';
import { NEXT_TURN } from './constants';

type Action = NextTurnAction;

export const nextTurnAction = (payload: boolean): Action => ({
  type: NEXT_TURN,
  payload,
});

export function nextTurnThunk() {
  return (dispatch: *, getState: *) => {
    const { turn, counter } = getState();
    setTimeout(() => {
      dispatch(nextTurnAction(!turn));
    }, counter * 1000);
  };
}
