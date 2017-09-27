// @flow
import { initialState } from '../store';
import type State from '../store';
import { TOGGLE_GAME_POWER } from '../actions/constants';

type Action =
  | StartGameAction
  | ToggleGamePowerAction
  | NextTurnAction
  | RoundSuccessAction;

export default (gameState: State = initialState, action: Action) => {
  switch (action.type) {
    case TOGGLE_GAME_POWER:
      if (action.payload) {
        return { ...gameState, power: action.payload };
      }
      return { ...initialState };
    default:
      return gameState;
  }
};
