// @flow
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import gameReducer from './reducers/gameReducer';

type State = {
  +power: boolean,
  +strictMode: boolean,
  +gameStarted: boolean,
  +gameOver: boolean,
  +playerWrongButtonPress: boolean,
  +startNextRound: boolean,
  +currentIndex: number,
  +activeColor: ?string,
  +counter: number,
  +lightSequence: ?(number[]),
  +playerTurn: boolean,
};

/**
 * State structure
 */
export const initialState: State = {
  /**
   * @todo Implement commented out state properties
   */
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

/* eslint-disable no-underscore-dangle */
const store = createStore(
  gameReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
