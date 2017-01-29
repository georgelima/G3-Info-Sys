import { combineReducers } from 'redux';

import customers from './customer';
import notes from './notes';

const reducer = combineReducers({
  customers,
  notes
});

export default reducer; 

