import reducer from '../../reducers/counterReducer';
import {
  START_GAME,
  POWER_ON_OFF,
  ROUND_SUCCESS,
} from '../../actions/constants';

describe('Counter reducer', () => {
  it('should return the initial state', () => {
    const initialState = 0;
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle START_GAME action', () => {
    expect(reducer({}, { type: START_GAME })).toEqual(1);
  });

  it('should handle POWER_ON_OFF action', () => {
    expect(reducer({}, { type: POWER_ON_OFF, payload: false })).toEqual(0);
  });

  it('should handle ROUND_SUCCESS action', () => {
    const state = 2;
    const newState = state + 1;
    const randomNumber = 3;
    expect(
      reducer(state, { type: ROUND_SUCCESS, payload: randomNumber }),
    ).toEqual(newState);
  });
});
