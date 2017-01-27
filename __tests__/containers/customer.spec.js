import React from 'react';

import { Customers } from '../../src/containers/Customers';

import { mount, shallow } from 'enzyme';

import sinon from 'sinon';

 const customer = {
  _id: 0,
  name: "George",
  email: "opa@hotmail.com",
  cellphone: "999999999",
  city: "Parnaiba",
  state: "PI"
};

describe("Customers Container", () => {
  
  test("should render", () => {

    const wrapper = shallow(<Customers dispatch={ () => {} } customers={ [] }/>);

    expect(wrapper.length).toEqual(1);

  });
  
  test("deleteCustomer()", () => {

    const dispatch = sinon.spy();

    const wrapper = mount(<Customers dispatch={ dispatch } customers={[ customer ]} />);

    wrapper.find('button .is-danger').first().simulate('click');

    expect(dispatch.calledOnce).toEqual(true);

  });

  test("showInfoCustomer()", () => {

    const wrapper = shallow(<Customers dispatch={ () => {} } customers={ [customer] }/>);

    expect(wrapper.instance().state.showModalCustomer).toEqual(false);

    wrapper.instance().showInfoCustomer(customer);

    expect(wrapper.instance().state.showModalCustomer).toEqual(true);

    expect(wrapper.instance().state.customerModal).toEqual(customer);

  });

  test("closeModalNewCustomer()", () => {
    
    const wrapper = shallow(<Customers dispatch={() => {}} customers={[]} />);

    wrapper.instance().closeModalNewCustomer();

    expect(wrapper.instance().state.showModalNewCustomer).toEqual(false);

  });

  test("showModalNewCustomer()", () => {

    const wrapper = shallow(<Customers dispatch = { () => {} } customers={ [] } />);

    wrapper.instance().showModalNewCustomer();

    expect(wrapper.instance().state.showModalNewCustomer).toEqual(true);

  });

  test("saveCustomerChanges()", () => {
    const dispatch = sinon.spy();
    const wrapper = shallow(<Customers dispatch = { dispatch } customers={ [] } />)

    wrapper.instance().saveNewCustomer(customer);

    expect(dispatch.calledOnce).toEqual(true);

    expect(wrapper.instance().state.showModalNewCustomer).toEqual(false);
  });

  

});