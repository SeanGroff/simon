import waitTime from '../../utils/waitTime';
import getRandomColor from '../../utils/getRandomColor';
import {
  AUDIO_DELAY_TIME,
  REDUCED_DELAY_TIME,
  RESTART_GAME_DELAY_TIME,
} from '../../constants';

const TOGGLE_GAME_POWER = 'simon/game/TOGGLE_GAME_POWER';
const TOGGLE_STRICT_MODE = 'simon/game/TOGGLE_STRICT_MODE';
const START_GAME = 'simon/game/START_GAME';
const GAME_OVER = 'simon/game/GAME_OVER';
const START_AUDIO = 'simon/game/START_AUDIO';
const FINISH_AUDIO = 'simon/game/FINISH_AUDIO';
const GUESS_COLOR = 'simon/game/GUESS_COLOR';
const NEXT_LEVEL = 'simon/game/NEXT_LEVEL';
const TURN_LIGHT_ON = 'simon/game/TURN_LIGHT_ON';
const TURN_LIGHT_OFF = 'simon/game/TURN_LIGHT_OFF';
const RESTART = 'simon/game/RESTART';

const initialState = {
  audioPlaying: false,
  counter: null,
  gameOver: false,
  power: false,
  strictMode: false,
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case TOGGLE_GAME_POWER:
      if (payload) {
        return {
          ...state,
          power: payload,
        };
      }
      return { ...initialState };

    case RESTART:
      return {
        ...initialState,
        power: true,
      };

    case TOGGLE_STRICT_MODE:
      return {
        ...state,
        strictMode: !state.strictMode,
      };

    case START_GAME:
      return {
        ...state,
        gameOver: false,
        counter: 1,
      };

    case START_AUDIO:
      return {
        ...state,
        audioPlaying: true,
      };

    case FINISH_AUDIO:
      return {
        ...state,
        audioPlaying: false,
      };

    case NEXT_LEVEL:
      return {
        ...state,
        counter: state.counter + 1,
      };

    case GUESS_COLOR:
      return {
        ...state,
        gameOver: state.strictMode ? !payload.succeeded : false,
      };

    default:
      return state;
  }
}

/* ============================================================================
                              Action Creators
============================================================================= */

export function toggleGamePower(power) {
  return {
    type: TOGGLE_GAME_POWER,
    payload: power,
  };
}

export function startGame(color: string) {
  return {
    type: START_GAME,
    payload: color,
  };
}

export function restartGame() {
  console.log('restartGame()');
  return {
    type: RESTART,
  };
}

export function nextLevel(color: string) {
  return {
    type: NEXT_LEVEL,
    payload: color,
  };
}

export function turnLightOn(color: string) {
  return {
    type: TURN_LIGHT_ON,
    payload: color,
  };
}

export function turnLightOff() {
  return {
    type: TURN_LIGHT_OFF,
  };
}

export function toggleStrictMode() {
  return {
    type: TOGGLE_STRICT_MODE,
  };
}

export function startAudio() {
  return {
    type: START_AUDIO,
  };
}

export function finishAudio() {
  return {
    type: FINISH_AUDIO,
  };
}

export function guessColor({ succeeded, color }) {
  return {
    type: GUESS_COLOR,
    payload: { succeeded, color },
  };
}

/* ============================================================================
                                    Thunks
============================================================================= */

export function startGameThunk() {
  console.log('startGameThunk');
  return (dispatch, getState) => {
    const color = getRandomColor();
    dispatch(startGame(color));
  };
}

export const playSequenceThunk = () => async (dispatch, getState) => {
  dispatch(startAudio());
  const { match } = getState();
  for (let i = 0; i < match.sequence.length; i += 1) {
    const color = match.sequence[i];
    dispatch(turnLightOn(color));
    await waitTime(AUDIO_DELAY_TIME);
    dispatch(turnLightOff());
    await waitTime(AUDIO_DELAY_TIME);
  }
  dispatch(finishAudio());
};

export const guessThunk = ({ succeeded, color }) => async (
  dispatch,
  getState,
) => {
  dispatch(guessColor({ succeeded, color }));
  dispatch(startAudio());
  dispatch(turnLightOn(color));
  await waitTime(REDUCED_DELAY_TIME);
  dispatch(turnLightOff());
  await waitTime(REDUCED_DELAY_TIME);
  dispatch(finishAudio());

  const { match } = getState();
  const { sequence, guessed } = match;
  const done = sequence.length === guessed.length && succeeded;

  return new Promise(resolve => resolve({ done }));
};

export function nextLevelThunk() {
  return (dispatch, getState) => {
    const color = getRandomColor();
    dispatch(nextLevel(color));
  };
}

export function restartGameThunk() {
  return async (dispatch, getState) => {
    await waitTime(RESTART_GAME_DELAY_TIME);
    dispatch(restartGame());
    dispatch(startGameThunk());
    dispatch(playSequenceThunk());
  };
}

export const actionTypes = {
  TOGGLE_GAME_POWER,
  START_GAME,
  NEXT_LEVEL,
  GUESS_COLOR,
  GAME_OVER,
  TURN_LIGHT_ON,
  TURN_LIGHT_OFF,
  RESTART,
};
