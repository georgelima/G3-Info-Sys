import React from 'react';

import { shallow, mount } from 'enzyme';

import ModalCustomer from '../../src/components/ModalCustomer';

describe("<ModalCustomer />", () => {

  test("should render without crash", () => {

    const props = {
      isActive: true
    }

    const wrapper = shallow(<ModalCustomer { ...props } />);

    expect(wrapper.length).toEqual(1);

  });

  test("should not render if isActive is false", () => {

    const wrapper = shallow(<ModalCustomer isActive={ false } />);

    expect(wrapper.find('form').length).toEqual(0);

  });

});