import reducer from '../../reducers/playerTurnReducer';
import { NEXT_TURN, POWER_ON_OFF } from '../../actions/constants';

describe('player turn reducer', () => {
  it('should return the initial state', () => {
    const initialState = false;
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle NEXT_TURN action', () => {
    expect(reducer({}, { type: NEXT_TURN, payload: false })).toEqual(false);
  });

  it('should handle POWER_ON_OFF action', () => {
    expect(reducer({}, { type: POWER_ON_OFF, payload: false })).toEqual(false);
  });
});
