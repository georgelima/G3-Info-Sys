import React from 'react';

import { shallow } from 'enzyme';

import Footer from '../../src/components/Footer';

describe("<Footer />", () => {

  test("should render without crash", () => {

    const wrapper = shallow(<Footer />);

    expect(wrapper.find('footer').length).toEqual(1);

  });

});