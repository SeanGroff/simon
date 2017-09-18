// @flow
import { combineReducers } from 'redux';
import power from './powerReducer';
import counter from './counterReducer';
import lightSequence from './lightSequenceReducer';
import playerTurn from './playerTurnReducer';

export default combineReducers({
  power,
  counter,
  lightSequence,
  playerTurn,
});
