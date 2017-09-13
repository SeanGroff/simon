// import R from 'rambda';
import { POWER_ON_OFF } from '../actions/constants';

export const initialState = {
  powerOn: false,
  strictMode: false,
  startGame: false,
  gameOver: false,
  playerWrongButtonPress: false,
  count: 0,
  aiColorSequence: undefined, // [{ buttonPressNum: 0, color: BLUE }, ...]
  playerButtonPressNumber: 0,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case POWER_ON_OFF:
      if (state.powerOn) {
        return { ...state, powerOn: true };
      }
      return { ...state, ...initialState };
    default:
      return state;
  }
};

export default rootReducer;
