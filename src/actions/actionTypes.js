// @flow
import {
  START_GAME,
  TOGGLE_GAME_POWER,
  START_NEXT_ROUND,
  ROUND_SUCCESS,
} from './constants';

export type StartGameAction = {
  type: typeof START_GAME,
};

export type ToggleGamePowerAction = {
  type: typeof TOGGLE_GAME_POWER,
  payload: boolean,
};

export type StartNextRoundAction = {
  type: typeof START_NEXT_ROUND,
};

export type RoundSuccessAction = {
  type: typeof ROUND_SUCCESS,
  payload: number,
};
