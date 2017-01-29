import React from 'react';

import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import FormCustomer from '../../src/components/FormCustomer';

describe("<FormCustomer />", () => {

  test("should render without crash", () => {

    const wrapper = mount(<FormCustomer />);

    expect(wrapper.length).toEqual(1);

  });

  test("should render a form with defaultValue", () => {
    const customer = {
      _id: 10,
      name: "George",
      email: "opa@hotmail.com",
      cellphone: "999999999",
      city: "Parnaiba",
      state: "PI"
    };

    const wrapper = mount(<FormCustomer customer={ customer } />);
    
    expect(wrapper.find('form').childAt(0).find('input').prop('defaultValue')).toEqual(customer.name);
  });

  test("should render a form without defaultValue", () => {

    const wrapper = mount(<FormCustomer />);
    
    expect(wrapper.find('form').childAt(0).find('input').prop('defaultValue')).toEqual(undefined);

  });

  test("should to have a clickable button ", () => {
    
    const onOk = sinon.spy();
    const wrapper = mount(<FormCustomer onOk={ onOk } />);

    wrapper.find('button').simulate('click');

    expect(onOk.calledOnce).toEqual(true);

  });

})
