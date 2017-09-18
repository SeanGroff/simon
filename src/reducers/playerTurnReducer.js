// @flow
import { START_GAME, POWER_ON_OFF } from '../actions/constants';

type Action = {
  type: string,
  payload?: any,
};

export default function(state: boolean = false, action: Action) {
  switch (action.type) {
    case START_GAME:
      return true;
    case POWER_ON_OFF:
      return false;
    default:
      return state;
  }
}
