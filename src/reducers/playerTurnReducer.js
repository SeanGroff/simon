// @flow
import type {
  PowerOnOffAction,
  NextTurnAction,
  RoundSuccessAction,
} from '../actions/actionTypes';
import { NEXT_TURN, POWER_ON_OFF, ROUND_SUCCESS } from '../actions/constants';

type State = boolean;

type Action = PowerOnOffAction | NextTurnAction | RoundSuccessAction;

export default function(state: State = false, action: Action) {
  switch (action.type) {
    case NEXT_TURN:
      return action.payload;
    case POWER_ON_OFF:
      return false;
    case ROUND_SUCCESS:
      return false;
    default:
      return state;
  }
}
