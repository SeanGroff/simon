const TOGGLE_GAME_POWER = 'TOGGLE_GAME_POWER';
const START_GAME = 'START_GAME';
const NEXT_LEVEL = 'NEXT_LEVEL';
const GUESS_COLOR = 'GUESS_COLOR';

/**
 * Initial State
 */
const initialState = {
  guessed: [],
  sequence: [],
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case TOGGLE_GAME_POWER:
      if (!payload.power) {
        return { ...initialState };
      }
      return { ...state };

    case START_GAME:
      return {
        guessed: [],
        sequence: [payload],
      };

    case NEXT_LEVEL:
      const prevSequence = state.sequence;
      return {
        guessed: [],
        sequence: [...prevSequence, payload],
      };

    case GUESS_COLOR:
      const prevGuessed = state.guessed;
      return {
        ...state,
        guessed: payload.succeeded
          ? [...prevGuessed, payload.color]
          : prevGuessed,
      };

    default:
      return state;
  }
}
