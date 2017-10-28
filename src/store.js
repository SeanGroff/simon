// @flow
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import rootReducer from './ducks';

const store = createStore(
  rootReducer,
  undefined,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
