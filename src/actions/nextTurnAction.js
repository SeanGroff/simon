// @flow
import { NEXT_TURN } from './constants';

type Action = {
  type: string,
  payload: boolean,
};

export const nextTurnAction = (payload: boolean): Action => ({
  type: NEXT_TURN,
  payload,
});

export function nextTurnThunk() {
  return (dispatch, getState) => {
    const { turn, counter } = getState();
    setTimeout(() => {
      dispatch(nextTurnAction(!turn));
    }, counter * 1000);
  };
}
