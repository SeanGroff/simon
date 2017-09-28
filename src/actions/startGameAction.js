// @flow
import type { StartGameAction } from './actionTypes';
import { START_GAME } from './constants';
// import { nextTurnAction } from './nextTurnAction';
// import { getRandomNumber } from '../utils/logic';

type Action = StartGameAction;

// type Args = {
//   playerTurn: number,
//   counter: number,
// };

export const startGameAction = (): Action => ({
  type: START_GAME,
});

/**
 * @todo Finish startGameThunk (See comments)
 */
// export function startGameThunk() {
//   return (dispatch: *, getState: *) => {
//     const { playerTurn, counter }: Args = getState();

//     dispatch(startGameAction());
//     dispatch(startNextRound()) // counter++, playerTurn = false
//      dispatch(lightSequence()) // each interval setState to color, playerTurn = true
//
//   };
// }
