import { 
  ADD_CUSTOMER, 
  DELETE_CUSTOMER, 
  CHANGE_CUSTOMER
} from '../constants/ActionTypes';

function addCustomer(state, customer) {
  return state.concat(customer);
}

function deleteCustomer(state, customer) {
  return state.filter(currentCustomer => currentCustomer._id !== customer._id);
}

function changeCustomer(state, customer) {
  return state.map((current, i) => 
    current._id === customer._id ? customer : current
  );
}

export default function customers(state = [], action) {
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

