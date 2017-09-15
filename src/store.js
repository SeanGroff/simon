// @flow
import { createStore } from 'redux';
import appReducer from './reducers/appReducer';

/**
 * State structure
 */
export const initialState = {
  power: false,
  strictMode: false,
  gameOver: false,
  playerWrongButtonPress: false,
  counter: 0,
  aiColorSequence: undefined, // [{ buttonPressNum: 0, color: BLUE }, ...]
  playerTurn: false,
};

/* eslint-disable no-underscore-dangle */
const store = createStore(
  appReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
