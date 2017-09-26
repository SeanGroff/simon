// @flow
import type {
  StartGameAction,
  PowerOnOffAction,
  RoundSuccessAction,
} from '../actions/actionTypes';
import { START_GAME, POWER_ON_OFF, ROUND_SUCCESS } from '../actions/constants';

type State = ?(number[]);

type Action = StartGameAction | PowerOnOffAction | RoundSuccessAction;

export default function(state: State = [], action: Action) {
  switch (action.type) {
    case START_GAME:
      return [action.payload];
    case POWER_ON_OFF:
      return [];
    case ROUND_SUCCESS:
      const { payload } = action;
      return [...state, payload];
    default:
      return state;
  }
}
