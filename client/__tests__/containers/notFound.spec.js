import React from 'react';

import { shallow } from 'enzyme';

import NotFound from '../../src/containers/NotFound';

describe("NotFound container", () => {

  test("should render", () => {

    const wrapper = shallow(<NotFound />);

    expect(wrapper.length).toEqual(1);
  });

});