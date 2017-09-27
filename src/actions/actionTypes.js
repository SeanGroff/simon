// @flow
import {
  START_GAME,
  TOGGLE_GAME_POWER,
  NEXT_TURN,
  ROUND_SUCCESS,
} from './constants';

export type StartGameAction = {
  type: typeof START_GAME,
  payload: number,
};

export type ToggleGamePowerAction = {
  type: typeof TOGGLE_GAME_POWER,
  payload: boolean,
};

export type NextTurnAction = {
  type: typeof NEXT_TURN,
  payload: boolean,
};

export type RoundSuccessAction = {
  type: typeof ROUND_SUCCESS,
  payload: number,
};
