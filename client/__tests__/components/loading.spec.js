import React from 'react';
import { shallow } from 'enzyme';

import Loading from '../../src/components/Loading';

describe("<Loading />", () => {
  
  test("should render without crash", () => {

    const wrapper = shallow(<Loading />);

    expect(wrapper.length).toEqual(1);

  });

});