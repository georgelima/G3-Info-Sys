import React from 'react';

import { shallow, mount } from 'enzyme';

import Table from '../../src/components/Table';

describe("<Table />", () => {

  test("should render without crash", () => {
    const props = {
      body: [],
      header: [],
      isLoaded: true,
      onDeleteClick: () => {},
      onInfoClick: () => {}
    };

    const wrapper = mount(<Table {...props} />);

    expect(wrapper.find('.table').length).toEqual(1);

  });

  test("should not render if isActive is false", () => {
    const props = {
      body: [],
      header: [],
      isLoaded: false,
      onDeleteClick: () => {},
      onInfoClick: () => {}
    };

    const wrapper = mount(<Table {...props} />);

    expect(wrapper.find('table').length).toEqual(0);

  });

  // test("must have three Link for routing", () => {

  //   const wrapper = shallow(<Menu />);

  //   expect(wrapper.find('li Link').first().prop('to')).toEqual("customers");
  //   expect(wrapper.find('li Link').last().prop('to')).toEqual("notes");
  
  // });

});