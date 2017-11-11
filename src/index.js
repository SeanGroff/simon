import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './redux/createStore';
import Simon from './components/Simon';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <Simon />
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
