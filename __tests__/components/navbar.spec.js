import React from 'react';

import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import Navbar from '../../src/components/Navbar';

describe("<Navbar />", () => {
  const wrapper = shallow(<Navbar />);  
  
  test("should rendering without crash", () => {
    expect(wrapper.length).toEqual(1);
  });

  test("should render a h1 with Link to '/'", () => {
    expect(wrapper.find('Link').prop('to')).toEqual("/");
  });

  test("should to display a button clickable", () => {
    const clickButtomRight = sinon.spy();
    const wrapperFull = mount(<Navbar clickButtomRight={ clickButtomRight }/>);  

    expect(wrapperFull.find('.button').childAt(1).text()).toEqual("Reportar Problema");
    
    wrapperFull.find('.button').simulate('click');
    expect(clickButtomRight.calledOnce).toEqual(true);
  });

});