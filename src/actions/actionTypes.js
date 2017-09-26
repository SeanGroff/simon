// @flow
import {
  START_GAME,
  POWER_ON_OFF,
  NEXT_TURN,
  ROUND_SUCCESS,
} from './constants';

export type StartGameAction = {
  type: typeof START_GAME,
  payload: number,
};

export type PowerOnOffAction = {
  type: typeof POWER_ON_OFF,
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
