// @flow
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import appReducer from './reducers/appReducer';

/**
 * State structure
 */
export const initialState = {
  /**
   * @todo Implement commented out state properties
   */
  power: false,
  // strictMode: false,
  // gameOver: false,
  // playerWrongButtonPress: false,
  counter: 0,
  lightSequence: [], // [0, 1, 2, 3]
  playerTurn: false,
};

/* eslint-disable no-underscore-dangle */
const store = createStore(
  appReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
