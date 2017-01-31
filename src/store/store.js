import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import reducer from '../reducers/index';

const logger = store => next => action => {
  if (typeof action === 'function') {
    next(action);
  } else {
    console.log(action);
    next(action);
  }
};

const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),  applyMiddleware(logger, ReduxThunk));

export default store;