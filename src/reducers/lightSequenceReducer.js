// @flow
import { START_GAME, POWER_ON_OFF } from '../actions/constants';

type Action = {
  type: string,
  payload?: any,
};

export default function(state: [] = [], action: Action) {
  switch (action.type) {
    case START_GAME:
      return [action.payload];
    case POWER_ON_OFF:
      return [];
    default:
      return state;
  }
}
