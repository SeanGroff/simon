// @flow
import type { StartGameAction, NextTurnAction } from '../actions/actionTypes';
import { NEXT_TURN, POWER_ON_OFF } from '../actions/constants';

type State = boolean;

type Action = StartGameAction | NextTurnAction;

export default function(state: State = false, action: Action) {
  switch (action.type) {
    case NEXT_TURN:
      return action.payload;
    case POWER_ON_OFF:
      return false;
    default:
      return state;
  }
}
