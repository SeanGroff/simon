// @flow
import { NEXT_TURN, POWER_ON_OFF } from '../actions/constants';

type Action = {
  type: string,
  payload?: boolean,
};

export default function(state: boolean = false, action: Action) {
  switch (action.type) {
    case NEXT_TURN:
      return action.payload;
    case POWER_ON_OFF:
      return false;
    default:
      return state;
  }
}
