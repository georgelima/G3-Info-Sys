import { addCustomer, deleteCustomer, changeCustomer } from '../src/actions/CustomerActions';
import { addNote, deleteNote } from '../src/actions/NotesActions';

describe("customers actions", () => {
  
  test("adicionar um cliente a lista", () => {
    
    const oldState = [];

    const customer = {
      name: "George",
      email: "opa@hotmail.com",
      cellphone: "999999999",
      city: "Parnaiba",
      state: "PI"
    }

    const newState = addCustomer(oldState, customer);

    expect(newState).toEqual([{
      name: "George",
      email: "opa@hotmail.com",
      cellphone: "999999999",
      city: "Parnaiba",
      state: "PI"
    }]);

  });

  test("remover um cliente da lista", () => {
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

    const newState = deleteCustomer(oldState, {
      _id: 11,
      name: "George",
      email: "opa@hotmail.com",
      cellphone: "999999999",
      city: "Parnaiba",
      state: "PI"
    });

    expect(newState).toEqual([{
      _id: 10,
      name: "George",
      email: "opa@hotmail.com",
      cellphone: "999999999",
      city: "Parnaiba",
      state: "PI"
    }]);
    
  });

  test("mudar dados de um cliente específico", () => {

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

    const newCustomer = {
      _id: 11,
      name: "Guilherme",
      email: "guil-7@hotmail.com",
      cellphone: "999999999",
      city: "Parnaiba",
      state: "PI"
    };

    const newState = changeCustomer(oldState, newCustomer); 

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

  test("mudar dados de um cliente que não existe", () => {

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

    const newCustomer = {
      _id: 13,
      name: "Guilherme",
      email: "guil-7@hotmail.com",
      cellphone: "999999999",
      city: "Parnaiba",
      state: "PI"
    };

    const newState = changeCustomer(oldState, newCustomer); 

    expect(newState).toEqual([{
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
    }]);

  });

});

describe("notes actions", () => {
  
  test("adicionar uma nota a lista", () => {
    
    const oldState = [];

    const note = {
      customer: 12,
      totalValue: 500,
      items: [{ name: "Folder", unitValue: 0.30, qtd: 100, totalValue: 30 }]
    }

    const newState = addNote(oldState, note);

    expect(newState).toEqual([{
      customer: 12,
      totalValue: 500,
      items: [{ name: "Folder", unitValue: 0.30, qtd: 100, totalValue: 30 }]
    }]);

  });

  test("remover um cliente da lista", () => {
    
    const oldState = [{
      _id: 10,
      customer: 12,
      totalValue: 500,
      items: [{ name: "Folder", unitValue: 0.30, qtd: 100, totalValue: 30 }]
    }];

    const newState = deleteNote(oldState, {
      _id: 10,
      customer: 12,
      totalValue: 500,
      items: [{ name: "Folder", unitValue: 0.30, qtd: 100, totalValue: 30 }]
    });

    expect(newState).toEqual([]);

  });

});