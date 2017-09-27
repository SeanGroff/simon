import { initialState } from '../../store';
import { TOGGLE_GAME_POWER } from '../../actions/constants';
import reducer from '../../reducers/gameReducer';

describe('Game reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle TOGGLE_GAME_POWER with a falsy payload', () => {
    const mockState = initialState;
    const action = { type: TOGGLE_GAME_POWER, payload: false };
    expect(reducer(mockState, action)).toEqual(initialState);
  });
  it('should handle TOGGLE_GAME_POWER with truthy payload', () => {
    const mockState = initialState;
    const action = { type: TOGGLE_GAME_POWER, payload: true };
    expect(reducer(mockState, action)).toEqual({
      ...mockState,
      power: action.payload,
    });
  });
});
