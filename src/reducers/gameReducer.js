// @flow
import { initialState } from '../store';
import type State from '../store';
import type {
  StartGameAction,
  ToggleGamePowerAction,
  NextTurnAction,
  RoundSuccessAction,
} from '../actions/actionTypes';
import { TOGGLE_GAME_POWER, START_GAME } from '../actions/constants';

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
    case START_GAME:
      return { ...gameState, gameStarted: true };
    default:
      return gameState;
  }
};
