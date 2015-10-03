import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';

import * as reducers from './reducers';

const app = combineReducers({
  ...reducers
});

const createStoreWithMiddleware = applyMiddleware(
  thunk
)(createStore);

export default function makeStore() {
  return createStoreWithMiddleware(app);
};
