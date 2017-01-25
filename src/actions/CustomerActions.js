import { 
  ADD_CUSTOMER, 
  DELETE_CUSTOMER, 
  CHANGE_CUSTOMER 
} from '../constants/ActionTypes';

export function addCustomer(customer) {
  return {
    type: ADD_CUSTOMER,
    customer
  }
}

export function deleteCustomer(customer) {
  return {
    type: DELETE_CUSTOMER,
    customer
  }
}

export function changeCustomer(customer) {
  return {
    type: CHANGE_CUSTOMER,
    customer
  }
}