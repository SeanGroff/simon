import rootReducer from '../../reducers/rootReducer';
import { POWER_ON_OFF } from '../../actions/constants';

describe('Root reducer', () => {
  it('should return the initial state', () => {
    const initialState = { power: false };
    expect(rootReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle POWER_ON_OFF with a falsy payload', () => {
    const action = { type: POWER_ON_OFF, payload: false };
    expect(rootReducer({}, action)).toEqual({ power: false });
  });
});
