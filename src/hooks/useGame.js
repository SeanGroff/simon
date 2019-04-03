import React from 'react'

const actions = {
  TOGGLE_GAME_POWER: 'simon/game/TOGGLE_GAME_POWER',
  TOGGLE_STRICT_MODE: 'simon/game/TOGGLE_STRICT_MODE',
  START_GAME: 'simon/game/START_GAME',
  START_AUDIO: 'simon/game/START_AUDIO',
  FINISH_AUDIO: 'simon/game/FINISH_AUDIO',
  GUESS_COLOR: 'simon/game/GUESS_COLOR',
  NEXT_LEVEL: 'simon/game/NEXT_LEVEL',
  TURN_LIGHT_ON: 'simon/game/TURN_LIGHT_ON',
  TURN_LIGHT_OFF: 'simon/game/TURN_LIGHT_OFF',
  RESTART: 'simon/game/RESTART',
}
const initialState = {
  audioPlaying: false,
  counter: null,
  gameOver: false,
  power: false,
  strictMode: false,
}

const reducer = (state = initialState, action) => {
  console.log({ state })
  console.log({ action })
  const { type, payload } = action
  switch (type) {
    case actions.TOGGLE_GAME_POWER:
      if (action.power) {
        return {
          ...state,
          power: action.power,
        }
      }
      return { ...initialState }

    case actions.RESTART:
      return {
        ...initialState,
        power: true,
      }

    case actions.TRY_AGAIN:
      return {
        ...state,
        counter: payload,
      }

    case actions.TOGGLE_STRICT_MODE:
      return {
        ...state,
        strictMode: !state.strictMode,
      }

    case actions.START_GAME:
      return {
        ...state,
        gameOver: false,
        counter: 1,
      }

    case actions.START_AUDIO:
      return {
        ...state,
        audioPlaying: true,
      }

    case actions.FINISH_AUDIO:
      return {
        ...state,
        audioPlaying: false,
      }

    case actions.NEXT_LEVEL:
      return {
        ...state,
        counter: state.counter + 1,
      }

    case actions.GUESS_COLOR:
      return {
        ...state,
        gameOver: state.strictMode ? !payload.succeeded : false,
      }

    default:
      return state
  }
}

/**
 * @todo Pass state and dispatch via Context!
 */
export const useGame = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  return [state, dispatch, actions]
}
