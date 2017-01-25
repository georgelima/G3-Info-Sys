import { 
  ADD_CUSTOMER, 
  DELETE_CUSTOMER, 
  CHANGE_CUSTOMER,
  FETCH_CUSTOMERS, 
  FETCH_CUSTOMERS_SUCCESS, 
  FETCH_CUSTOMERS_ERROR
} from '../constants/ActionTypes';

import { addCustomer, deleteCustomer, changeCustomer } from '../actions/CustomerActions';

const initialState = [];

export default function customers(state = initialState, action) {
  switch(action.type) {
    case ADD_CUSTOMER:
      return addCustomer(state, action.customer);
    case DELETE_CUSTOMER:
      return deleteCustomer(state, action.customer);
    case CHANGE_CUSTOMER:
      return changeCustomer(state, action.customer);
    default:
      return state;
  }
}

