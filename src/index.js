import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './redux/createStore';
import SimonContainer from './containers/SimonContainer';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <SimonContainer />
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
