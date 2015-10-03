import React from 'react';
import {Provider} from 'react-redux';

import App from './components/App';

import makeStore from './makeStore';

const store = makeStore();

React.render(
  <Provider store={store}>
    {() => <App />}
  </Provider>,
  document.getElementById('main')
);
