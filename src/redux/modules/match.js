import waitTime from '../../utils/waitTime';
import { TOGGLE_GAME_POWER, START_GAME, NEXT_LEVEL, GUESS_COLOR } from './game';
import { TRY_AGAIN_DELAY_TIME } from '../../constants/index';

export const TRY_AGAIN = 'simon/match/TRY_AGAIN';

type MatchState = {
  +guessed: ?(string[]),
  +sequence: ?(string[]),
};

const initialState = {
  guessed: [],
  sequence: [],
};

export default function reducer(state: MatchState = initialState, action) {
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

    case TRY_AGAIN:
      return {
        ...state,
        guessed: [],
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

export function tryAgain(counter) {
  return {
    type: TRY_AGAIN,
    payload: counter,
  };
}

export function tryAgainThunk() {
  return async (dispatch, getState) => {
    const counterValue = getState().game.counter;
    dispatch(tryAgain('X'));
    await waitTime(TRY_AGAIN_DELAY_TIME);
    dispatch(tryAgain(counterValue));
  };
}
