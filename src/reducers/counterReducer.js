// @flow
import type { StartGameAction, PowerOnOffAction } from '../actions/actionTypes';
import { START_GAME, POWER_ON_OFF, ROUND_SUCCESS } from '../actions/constants';

type State = number;

type Action = StartGameAction | PowerOnOffAction;

export default function(state: State = 0, action: Action) {
  switch (action.type) {
    case START_GAME:
      return 1;
    case POWER_ON_OFF:
      return 0;
    case ROUND_SUCCESS:
      const newState = state + 1;
      return newState;
    default:
      return state;
  }
}
