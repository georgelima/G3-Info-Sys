import customers from '../src/reducers/customer';

import {
  ADD_CUSTOMER,
  DELETE_CUSTOMER,
  CHANGE_CUSTOMER
} from '../src/constants/ActionTypes';

describe("customers reducer", () => {

  test("empty state", () => {
    
    const oldState = [];

    const newState = customers(oldState, { type: '@@INIT' });

    expect(newState).toEqual([]);

  });

  test("ADD_CUSTOMER", () => {

    const oldState = [];

    const customer = {
      _id: 10,
      name: "George",
      email: "opa@hotmail.com",
      cellphone: "999999999",
      city: "Parnaiba",
      state: "PI"
    }

    const newState = customers(oldState, { type: ADD_CUSTOMER, customer: customer  });

    expect(newState).toEqual([{
        _id: 10,
        name: "George",
        email: "opa@hotmail.com",
        cellphone: "999999999",
        city: "Parnaiba",
        state: "PI"
      }
    ]);

  });

  test("CHANGE_CUSTOMER", () => {

    const oldState = [{
      _id: 10,
      name: "George",
      email: "opa@hotmail.com",
      cellphone: "999999999",
      city: "Parnaiba",
      state: "PI"
    },{
      _id: 11,
      name: "George",
      email: "opa@hotmail.com",
      cellphone: "999999999",
      city: "Parnaiba",
      state: "PI"
    }];

    const customer = {
      _id: 11,
      name: "Guilherme",
      email: "guil-7@hotmail.com",
      cellphone: "999999999",
      city: "Parnaiba",
      state: "PI"
    };

    const newState = customers(oldState, { type: CHANGE_CUSTOMER, customer: customer }); 

    expect(newState).toEqual([{
      _id: 10,
      name: "George",
      email: "opa@hotmail.com",
      cellphone: "999999999",
      city: "Parnaiba",
      state: "PI"
    },{
      _id: 11,
      name: "Guilherme",
      email: "guil-7@hotmail.com",
      cellphone: "999999999",
      city: "Parnaiba",
      state: "PI"
    }]);

  });

  test("DELETE_CUSTOMER", () => {

    const oldState = [{
      _id: 10,
      name: "George",
      email: "opa@hotmail.com",
      cellphone: "999999999",
      city: "Parnaiba",
      state: "PI"
    }, {
      _id: 11,
      name: "Guilherme",
      email: "opa@hotmail.com",
      cellphone: "999999999",
      city: "Parnaiba",
      state: "PI"
    }];

    const customer = {
      _id: 10,
      name: "George",
      email: "opa@hotmail.com",
      cellphone: "999999999",
      city: "Parnaiba",
      state: "PI"
    };

    const newState = customers(oldState, { type: DELETE_CUSTOMER, customer: customer });

    expect(newState).toEqual([{
      _id: 11,
      name: "Guilherme",
      email: "opa@hotmail.com",
      cellphone: "999999999",
      city: "Parnaiba",
      state: "PI"
    }]);

  });

});

