import { combineReducers } from 'redux';
import lights from './lights';
import match from './match';
import game from './game';

export default combineReducers({
  lights,
  game,
  match,
});
