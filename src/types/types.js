// @flow
import { ThunkAction } from 'redux-thunk';
import {
  START_GAME,
  TOGGLE_GAME_POWER,
  START_NEXT_ROUND,
  ROUND_SUCCESS,
  PLAY_LIGHT_SEQUENCE,
} from '../actions/constants';

export type StoreState = {
  +power: boolean,
  +strictMode: boolean,
  +gameStarted: boolean,
  +gameOver: boolean,
  +playerWrongButtonPress: boolean,
  +startNextRound: boolean,
  +currentIndex: number,
  +activeColor: number | null,
  +counter: number,
  +lightSequence: number[],
  +playerTurn: boolean,
};

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

export type PlayLightSequenceAction = {
  type: typeof PLAY_LIGHT_SEQUENCE,
  payload: number,
};

export type Thunk = ThunkAction<void, StoreState, void>;
