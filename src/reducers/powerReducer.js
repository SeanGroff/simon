// @flow
import { POWER_ON_OFF } from '../actions/constants';

type Action = {
  type: string,
  payload: boolean,
};

export default function(state: boolean = false, action: Action) {
  switch (action.type) {
    case POWER_ON_OFF:
      return action.payload;
    default:
      return state;
  }
}
