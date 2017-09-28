// @flow
import type { StartNextRoundAction } from './actionTypes';
import { START_NEXT_ROUND } from './constants';

type Action = StartNextRoundAction;

// type Args = {
//   playerTurn: number,
//   counter: number,
// };

export const startNextRoundAction = (): Action => ({
  type: START_NEXT_ROUND,
});

/**
 * @todo Write test for this Thunk
 *
 * @export
 * @returns
 */
// export function nextTurnThunk() {
//   return (dispatch: *, getState: *) => {
//     const { playerTurn, counter }: Args = getState();
//     setTimeout(() => {
//       dispatch(startNextRoundAction(!playerTurn));
//     }, counter * 1000);
//   };
// }
