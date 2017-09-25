// @flow
import type { PowerOnOffAction } from './actionTypes';
import { POWER_ON_OFF } from './constants';

type Action = PowerOnOffAction;

export default (payload: boolean): Action => ({
  type: POWER_ON_OFF,
  payload,
});
