// @flow
import { START_GAME, POWER_ON_OFF } from '../actions/constants';

type Action = {
  type: string,
};

export default function(state: number = 0, action: Action) {
  switch (action.type) {
    case START_GAME:
      return 1;
    case POWER_ON_OFF:
      return 0;
    default:
      return state;
  }
}
