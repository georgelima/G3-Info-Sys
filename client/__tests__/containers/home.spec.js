import React from 'react';

import { shallow } from 'enzyme';

import { Home } from '../../src/containers/Home';

describe("Home Container", () => {

  test("should render", () => {

    const wrapper = shallow(<Home customers={[]} notes={[]} />);

    expect(wrapper.length).toEqual(1);

  });

});