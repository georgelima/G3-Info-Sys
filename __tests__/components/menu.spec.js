import React from 'react';

import { shallow } from 'enzyme';

import Menu from '../../src/components/Menu';

describe("<Menu />", () => {

  test("should render without crash", () => {

    const wrapper = shallow(<Menu />);

    expect(wrapper.find('aside').length).toEqual(1);

  });

  test("must have three Link for routing", () => {

    const wrapper = shallow(<Menu />);

    expect(wrapper.find('li Link').first().prop('to')).toEqual("customers");
    expect(wrapper.find('li Link').last().prop('to')).toEqual("notes");
  
  });

});