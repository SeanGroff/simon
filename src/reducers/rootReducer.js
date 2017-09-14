import appReducer from './appReducer';
import { POWER_ON_OFF } from '../actions/constants';

const rootReducer = (state, action) => {
  if (action.type === POWER_ON_OFF && !action.payload) {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
