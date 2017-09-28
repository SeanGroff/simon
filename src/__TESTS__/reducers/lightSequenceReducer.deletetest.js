import reducer from '../../reducers/lightSequenceReducer';
import {
  START_GAME,
  POWER_ON_OFF,
  ROUND_SUCCESS,
} from '../../actions/constants';

describe('Light sequence reducer', () => {
  it('should return the initial state', () => {
    const initialState = [];
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle START_GAME action', () => {
    const randomNumber = 3;
    expect(reducer([], { type: START_GAME, payload: randomNumber })).toEqual([
      randomNumber,
    ]);
  });

  it('should handle POWER_ON_OFF action', () => {
    expect(reducer([], { type: POWER_ON_OFF, payload: false })).toEqual([]);
  });

  it('should handle ROUND_SUCCESS action', () => {
    const randomNumber = 3;
    expect(
      reducer([], { type: ROUND_SUCCESS, payload: randomNumber }),
    ).toEqual([randomNumber]);
  });

  it('should handle ROUND_SUCCESS action with existing light sequence', () => {
    const randomNumber = 3;
    expect(
      reducer([1], { type: ROUND_SUCCESS, payload: randomNumber }),
    ).toEqual([1, randomNumber]);
  });
});
