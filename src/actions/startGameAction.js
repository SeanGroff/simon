// @flow
import type { StartGameAction } from './actionTypes';
import { START_GAME } from './constants';

type Action = StartGameAction;

export default (randomNumber: number): Action => ({
  type: START_GAME,
  payload: randomNumber,
});
