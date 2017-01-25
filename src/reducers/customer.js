import { 
  ADD_CUSTOMER, 
  DELETE_CUSTOMER, 
  CHANGE_CUSTOMER,
  FETCH_CUSTOMERS, 
  FETCH_CUSTOMERS_SUCCESS, 
  FETCH_CUSTOMERS_ERROR
} from '../constants/ActionTypes';

const initialState = [];

export function addCustomer(state, customer) {
  return state.concat(customer);
}

export function deleteCustomer(state, customer) {
  return state.filter(currentCustomer => currentCustomer._id !== customer._id);
}

export function changeCustomer(state, customer) {
  return state.map((current, i) => 
    current._id === customer._id ? customer : current
  );
}

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

