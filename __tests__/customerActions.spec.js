import {
  ADD_CUSTOMER,
  DELETE_CUSTOMER,
  CHANGE_CUSTOMER
} from '../src/constants/ActionTypes';

import { addCustomer, deleteCustomer, changeCustomer  } from '../src/actions/CustomerActions';

describe("customer actions", () => {

  const customer = {
    _id: 10,
    name: "George",
    email: "opa@hotmail.com",
    cellphone: "999999999",
    city: "Parnaiba",
    state: "PI"
  };

  test("add customer", () => {

    const action = addCustomer(customer);

    expect(action).toEqual({ type: ADD_CUSTOMER, customer });

  });

  test("delete customer", () => {

    const action = deleteCustomer(customer);

    expect(action).toEqual({ type: DELETE_CUSTOMER, customer });

  });
  
  test("change customer", () => {

    const action = changeCustomer(customer);

    expect(action).toEqual({ type: CHANGE_CUSTOMER, customer });

  });

});