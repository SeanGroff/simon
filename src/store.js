// @flow
import { createStore } from 'redux';
import appReducer from './reducers/appReducer';

/**
 * State structure
 */
// State = {
//   powerOn: false,
//   strictMode: false,
//   startGame: false,
//   gameOver: false,
//   playerWrongButtonPress: false,
//   count: 0,
//   aiColorSequence: undefined, // [{ buttonPressNum: 0, color: BLUE }, ...]
//   playerButtonPressNumber: 0,
// };

/* eslint-disable no-underscore-dangle */
const store = createStore(
  appReducer,
  undefined,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
