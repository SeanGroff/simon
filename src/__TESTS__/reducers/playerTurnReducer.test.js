import reducer from '../../reducers/playerTurnReducer';
import { START_GAME, POWER_ON_OFF } from '../../actions/constants';

describe('player turn reducer', () => {
  it('should return the initial state', () => {
    const initialState = false;
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle START_GAME action', () => {
    const randomNumber = 3;
    expect(reducer({}, { type: START_GAME, payload: randomNumber })).toEqual(
      true,
    );
  });

  it('should handle POWER_ON_OFF action', () => {
    expect(reducer({}, { type: POWER_ON_OFF, payload: false })).toEqual(false);
  });
});
