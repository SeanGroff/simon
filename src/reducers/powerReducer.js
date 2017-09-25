// @flow
import type { PowerOnOffAction } from '../actions/actionTypes';
import { POWER_ON_OFF } from '../actions/constants';

type State = boolean;

type Action = PowerOnOffAction;

export default function(state: State = false, action: Action) {
  switch (action.type) {
    case POWER_ON_OFF:
      return action.payload;
    default:
      return state;
  }
}
