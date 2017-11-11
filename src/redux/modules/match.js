import { actionTypes } from './game';

const { TOGGLE_GAME_POWER, START_GAME, NEXT_LEVEL, GUESS_COLOR } = actionTypes;

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
      const { succeeded, color } = payload;
      const prevGuessed = state.guessed;
      return {
        ...state,
        guessed: succeeded ? [...prevGuessed, color] : prevGuessed,
      };

    default:
      return state;
  }
}
