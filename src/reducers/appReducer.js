// @flow
import { combineReducers } from 'redux';
import power from './powerReducer';
import counter from './counterReducer';

export default combineReducers({
  power,
  counter,
});
