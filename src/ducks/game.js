import waitTime from '../utils/waitTime';
import getRandomColor from '../utils/getRandomColor';
import { AUDIO_DELAY_TIME /*, REDUCED_DELAY_TIME */ } from '../constants';

const TOGGLE_GAME_POWER = 'TOGGLE_GAME_POWER';
const START_GAME = 'START_GAME';
const GAME_OVER = 'GAME_OVER';
const START_AUDIO = 'START_AUDIO';
const FINISH_AUDIO = 'FINISH_AUDIO';
const GUESS_COLOR = 'GUESS_COLOR';
const NEXT_LEVEL = 'NEXT_LEVEL';
const TURN_LIGHT_ON = 'TURN_LIGHT_ON';
const TURN_LIGHT_OFF = 'TURN_LIGHT_OFF';

/**
 * Toggle Game Power Action Creator
 *
 * @param {boolean} power
 * @returns { type: TOGGLE_GAME_POWER, payload: {boolean} }
 */
function toggleGamePower(power) {
  return {
    type: TOGGLE_GAME_POWER,
    payload: power,
  };
}

/**
 *Start Game Action Creator
 *
 * @param {string} color
 * @returns { type: {START_GAME}, payload: {string} }
 */
function startGame(color: string) {
  return {
    type: START_GAME,
    payload: color,
  };
}

/**
 * Start Game Thunk
 *
 * @description Thunk - Gets a random color & dispatches startGame actionCreator
 * @returns {Thunk}
 */
function startGameThunk() {
  return (dispatch, getState) => {
    const color = getRandomColor();
    dispatch(startGame(color));
  };
}

/**
 * Next Level Action Creator
 *
 * @param {string} color
 * @returns { type: {NEXT_LEVEL}, payload: {string} }
 */
function nextLevel(color: string) {
  return {
    type: NEXT_LEVEL,
    payload: color,
  };
}

/**
 * Next Level Thunk
 *
 * @description Thunk - Gets a random color & dispatches nextLevel actionCreator
 * @returns {Thunk}
 */
function nextLevelThunk() {
  return (dispatch, getState) => {
    const color = getRandomColor();
    dispatch(nextLevel(color));
  };
}

/**
 * Turn Light On Action Creator
 *
 * @param {string} color 
 * @returns { type: {TURN_LIGHT_ON}, payload: {string} }
 */
function turnLightOn(color: string) {
  return {
    type: TURN_LIGHT_ON,
    payload: color,
  };
}

/**
 * Turn Light Off Action Creator
 *
 * @returns { type: TURN_LIGHT_OFF }
 */
function turnLightOff() {
  return {
    type: TURN_LIGHT_OFF,
  };
}

// const guessColor = createAction(GUESS_COLOR);
// const startAudio = createAction(START_AUDIO);
// const finishAudio = createAction(FINISH_AUDIO);

const playSequenceThunk = payload => (dispatch, getState) => {
  // dispatch(startAudio());
  const { match } = getState();
  match.all.forEach(async matched => {
    const color = match.all[matched];
    dispatch(turnLightOn({ color }));
    await waitTime(AUDIO_DELAY_TIME);
    dispatch(turnLightOff());
    await waitTime(AUDIO_DELAY_TIME);
  });
  //   dispatch(finishAudio());
};

// const guess = ({ succeeded, color }) => async (dispatch, getState) => {
//   dispatch(guessColor({ succeeded, color }));
//   dispatch(startAudio());
//   dispatch(lightenPad({ color }));
//   await waitTime(REDUCED_DELAY_TIME);
//   dispatch(lightenOffPad());
//   await waitTime(REDUCED_DELAY_TIME);
//   dispatch(finishAudio());

//   const { match } = getState();
//   const { all, guessed } = match;
//   const done = all.length === guessed.length && succeeded;

//   return new Promise(r => r({ done }));
// };

export const actionCreators = {
  toggleGamePower,
  // startAudio,
  startGame,
  startGameThunk,
  // finishAudio,
  // lightenPad,
  // lightenOffPad,
  nextLevel,
  nextLevelThunk,
  // guessColor,
  // guess,
  // sing,
};

/**
 * Action Types
 */
export const actionTypes = {
  TOGGLE_GAME_POWER,
  START_GAME,
  GAME_OVER,
  START_AUDIO,
  FINISH_AUDIO,
  GUESS_COLOR,
  NEXT_LEVEL,
};

/**
 * Initial State
 */
const initialState = {
  audioPlaying: false,
  counter: null,
  gameOver: false,
  power: false,
};

/**
 * Game Reducer
 *
 * @export
 * @param {any} [state=initialState]
 * @param {any} action
 * @returns { state }
 */
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
        gameOver: !payload.succeeded,
      };

    default:
      return state;
  }
}
