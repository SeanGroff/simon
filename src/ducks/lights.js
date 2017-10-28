const LIGHT_ON = 'LIGHT_ON';
const LIGHT_OFF = 'LIGHT_OFF';

/**
 * Light On Action Creator
 *
 * @param {string} color
 * @returns { type: {string}, payload: {string} }
 */
function lightOn(color: string) {
  return {
    type: LIGHT_ON,
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
    type: LIGHT_OFF,
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
  LIGHT_ON,
  LIGHT_OFF,
};

export const actionCreators = {
  lightOn,
  lightOff,
};

export default function lights(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LIGHT_ON:
      return state.map(light => ({
        ...light,
        active: payload.color === light.color,
      }));

    case LIGHT_OFF:
      return state.map(light => ({
        ...light,
        active: false,
      }));

    default:
      return state;
  }
}