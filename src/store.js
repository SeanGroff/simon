// @flow
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import gameReducer from './reducers/gameReducer';
import type { StoreState } from './types/types';

/**
 * State structure
 */
export const initialState: StoreState = {
  power: false,
  strictMode: false,
  gameStarted: false,
  gameOver: false,
  playerWrongButtonPress: false,
  startNextRound: false,
  currentIndex: 0,
  activeColor: null,
  counter: 0,
  lightSequence: [], // [0, 1, 2, 3]
  playerTurn: false,
};

const store = createStore(
  gameReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
