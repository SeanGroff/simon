// // @flow
// import type { RoundSuccessAction } from './actionTypes';
// import { ROUND_SUCCESS } from './constants';
// import { nextTurnAction } from './nextTurnAction';
// import { getRandomNumber } from '../utils/logic';

// type Action = RoundSuccessAction;

// type Counter = {
//   counter: number,
// };

// type PlayerTurn = {
//   playerTurn: boolean,
// };

// export const roundSuccessAction = (randomNumber: number): Action => ({
//   type: ROUND_SUCCESS,
//   payload: randomNumber,
// });

// export function roundSuccessThunk() {
//   return (dispatch: *, getState: *) => {
//     const { counter }: Counter = getState();
//     dispatch(roundSuccessAction(getRandomNumber()));

//     setTimeout(() => {
//       const { playerTurn }: PlayerTurn = getState();
//       dispatch(nextTurnAction(!playerTurn));
//     }, counter * 1000);
//   };
// }
