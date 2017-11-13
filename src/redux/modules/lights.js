import { TURN_LIGHT_ON, TURN_LIGHT_OFF, TOGGLE_GAME_POWER } from './game';

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
