const TURN_LIGHT_ON = 'TURN_LIGHT_ON';
const TURN_LIGHT_OFF = 'TURN_LIGHT_OFF';
const TOGGLE_GAME_POWER = 'TOGGLE_GAME_POWER';

/**
 * Light On Action Creator
 *
 * @param {string} color
 * @returns { type: {string}, payload: {string} }
 */
function lightOn(color: string) {
  return {
    type: TURN_LIGHT_ON,
    payload: color,
  };
}

/**
 * Light Off Action Creator
 *
 * @returns { type: {string} }
 */
function lightOff() {
  return {
    type: TURN_LIGHT_OFF,
  };
}

// Initial State
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

export const actionTypes = {
  TURN_LIGHT_ON,
  TURN_LIGHT_OFF,
};

export const actionCreators = {
  lightOn,
  lightOff,
};

export default function reducer(state = initialState, action) {
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
