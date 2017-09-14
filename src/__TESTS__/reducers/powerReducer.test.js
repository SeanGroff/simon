import reducer from '../../reducers/powerReducer';
import { POWER_ON_OFF } from '../../actions/constants';

describe('Power reducer', () => {
  it('should return the initial state', () => {
    const initialState = false;
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle POWER_ON_OFF with truthy payload', () => {
    expect(reducer({}, { type: POWER_ON_OFF, payload: true })).toEqual(true);
  });
});
