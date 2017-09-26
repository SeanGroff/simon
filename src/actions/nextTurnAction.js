// @flow
import type { NextTurnAction } from './actionTypes';
import { NEXT_TURN } from './constants';

type Action = NextTurnAction;

type Args = {
  playerTurn: number,
  counter: number,
};

export const nextTurnAction = (payload: boolean): Action => ({
  type: NEXT_TURN,
  payload,
});

/**
 * @todo Write test for this Thunk
 *
 * @export
 * @returns
 */
export function nextTurnThunk() {
  return (dispatch: *, getState: *) => {
    const { playerTurn, counter }: Args = getState();
    setTimeout(() => {
      dispatch(nextTurnAction(!playerTurn));
    }, counter * 1000);
  };
}
