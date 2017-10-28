// // @flow
// import { initialState } from '../store';
// import type {
//   StoreState,
//   StartGameAction,
//   ToggleGamePowerAction,
//   StartNextRoundAction,
//   RoundSuccessAction,
//   PlayLightSequenceAction,
// } from '../types/types';

// import {
//   TOGGLE_GAME_POWER,
//   START_GAME,
//   START_NEXT_ROUND,
//   PLAY_LIGHT_SEQUENCE,
// } from '../actions/constants';

// type Action =
//   | StartGameAction
//   | ToggleGamePowerAction
//   | StartNextRoundAction
//   | RoundSuccessAction
//   | PlayLightSequenceAction;

// export default (gameState: StoreState = initialState, action: Action) => {
//   switch (action.type) {
//     case TOGGLE_GAME_POWER:
//       if (action.payload) {
//         return { ...gameState, power: action.payload };
//       }
//       return { ...initialState };
//     case START_GAME:
//       return { ...gameState, gameStarted: true, lightSequence: action.payload };
//     case START_NEXT_ROUND:
//       return {
//         ...gameState,
//         counter: gameState.counter + 1,
//         playerTurn: false,
//       };
//     case PLAY_LIGHT_SEQUENCE:
//       return {
//         ...gameState,
//         activeColor: action.payload,
//       };
//     default:
//       return gameState;
//   }
// };
