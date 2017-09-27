// @flow
import type { ToggleGamePowerAction } from './actionTypes';
import { TOGGLE_GAME_POWER } from './constants';

type Action = ToggleGamePowerAction;

export default (payload: boolean): Action => ({
  type: TOGGLE_GAME_POWER,
  payload,
});
