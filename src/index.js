import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './redux/createStore';
import Simon from './containers/SimonContainer';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <Simon />
  </Provider>,
  document.getElementById('root'),
);
