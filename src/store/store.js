import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import reducer from '../reducers/index';

const logger = store => next => action => {
  console.log(action);
  next(action);
};

const store = createStore(reducer, applyMiddleware(logger, ReduxThunk));
                  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;