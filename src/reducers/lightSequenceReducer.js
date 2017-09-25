// @flow
import type { StartGameAction, PowerOnOffAction } from '../actions/actionTypes';
import { START_GAME, POWER_ON_OFF } from '../actions/constants';

type State = ?(number[]);

type Action = StartGameAction | PowerOnOffAction;

export default function(state: State = [], action: Action) {
  switch (action.type) {
    case START_GAME:
      return [action.payload];
    case POWER_ON_OFF:
      return [];
    default:
      return state;
  }
}
