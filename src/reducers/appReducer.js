// @flow
import { combineReducers } from 'redux';
import power from './powerReducer';
import counter from './counterReducer';
import lightSequence from './lightSequenceReducer';

export default combineReducers({
  power,
  counter,
  lightSequence,
});
