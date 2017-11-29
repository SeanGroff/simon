import { createSelector } from 'reselect';

import { TURN_LIGHT_ON, TURN_LIGHT_OFF, TOGGLE_GAME_POWER } from './game';

type LightsState = [
  {
    +color: string,
    +active: boolean,
  },
];

/**
 * Selectors
 */
const counterSelector = state => state.game.counter;
const lightsSelector = state => state.lights;
const audioPlayingSelector = state => state.game.audioPlaying;
const powerSelector = state => state.game.power;
const gameOverSelector = state => state.game.gameOver;

/**
 * Get Active Light Selector
 */
export const getActiveLightSelector = createSelector(
  [counterSelector, lightsSelector],
  (counter, lights) => {
    if (counter) {
      return lights.reduce((accum, light) => {
        if (light.active) {
          return light.color;
        }
        return accum;
      }, '');
    }
  },
);

/**
 * Is Light clickable selector
 */
export const isLightClickableSelector = createSelector(
  [audioPlayingSelector, powerSelector, gameOverSelector, counterSelector],
  (audioPlaying, power, gameOver, counter) =>
    !audioPlaying && power && !gameOver && counter !== 'X' && !!counter
      ? true
      : false,
);

const initialState = [
  {
    color: 'green',
    active: 'false',
  },
  {
    color: 'yellow',
    active: 'false',
  },
  {
    color: 'blue',
    active: 'false',
  },
  {
    color: 'red',
    active: 'false',
  },
];

export default function reducer(state: LightsState = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case TOGGLE_GAME_POWER:
      if (!payload.power) {
        return initialState;
      }
      return state;

    case TURN_LIGHT_ON:
      return state.map(light => ({
        ...light,
        active: payload === light.color,
      }));

    case TURN_LIGHT_OFF:
      return state.map(light => ({
        ...light,
        active: false,
      }));

    default:
      return state;
  }
}

export function lightOn(color: string) {
  return {
    type: TURN_LIGHT_ON,
    payload: color,
  };
}

export function lightOff() {
  return {
    type: TURN_LIGHT_OFF,
  };
}
