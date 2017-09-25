// @flow
import type { StartGameAction, PowerOnOffAction } from '../actions/actionTypes';
import { START_GAME, POWER_ON_OFF } from '../actions/constants';

type State = number;

type Action = StartGameAction | PowerOnOffAction;

export default function(state: State = 0, action: Action) {
  switch (action.type) {
    case START_GAME:
      return 1;
    case POWER_ON_OFF:
      return 0;
    default:
      return state;
  }
}
