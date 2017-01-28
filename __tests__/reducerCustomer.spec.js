import customers from '../src/reducers/customer';

import { addCustomer, deleteCustomer, changeCustomer } from '../src/actions/CustomerActions'; 

import {
  ADD_CUSTOMER,
  DELETE_CUSTOMER,
  CHANGE_CUSTOMER
} from '../src/constants/ActionTypes';

const customer = {
  _id: 10,
  name: "George",
  email: "opa@hotmail.com",
  cellphone: "0000000000",
  city: "Teresina",
  state: "PI"
}

describe("customers reducer", () => {

  test("empty state", () => {
    
    const oldState = [];

    const newState = customers(oldState, { type: '@@INIT' });

    expect(newState).toEqual([]);

  });

  test("ADD_CUSTOMER", () => {

    const oldState = [];

    const newState = customers(oldState, addCustomer(customer));

    expect(newState).toEqual([customer]);

  });

  test("CHANGE_CUSTOMER", () => {

    const oldState = [customer];

    const newCustomer = {
      _id: 10,
      name: "Guilherme",
      email: "outro@gmail.com",
      cellphone: "1111111111",
      city: "Teresina",
      state: "PI"
    };

    const newState = customers(oldState, changeCustomer(newCustomer)); 

    expect(newState).toEqual([newCustomer]);

  });

  test("DELETE_CUSTOMER", () => {

    const oldState = [customer];

    const newState = customers(oldState, deleteCustomer(customer));

    expect(newState).toEqual([]);

  });

});

