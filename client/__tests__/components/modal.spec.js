import React from 'react';

import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import Modal from '../../src/components/Modal';

describe("<Modal />", () => {
  const props = { closeClick: () => {}, isActive: true };

  const wrapper = shallow(<Modal {...props} />);
  
  test("should render without crash", () => {

    expect(wrapper.length).toEqual(1);

  });

  test("should to display three clickable buttons", () => {
    const props = {
      okClick: sinon.spy(),
      closeClick: sinon.spy(),
      isActive: true
    }

    const wrapperFull = mount(<Modal { ...props }/>);

    wrapperFull.find('button .delete').simulate('click');
    expect(props.closeClick.calledOnce).toEqual(true);

    wrapperFull.find('.button .is-primary').simulate('click');
    expect(props.okClick.calledOnce).toEqual(true);

  });

  test("should not render if isActive prop is false", () => {
    const props = {
      okClick: () => {},
      closeClick: () => {},
      isActive: false
    }

    const wrapperFull = mount(<Modal { ...props }/>);
    
    expect(wrapperFull.find('#modal').length).toEqual(0);
    
  });

});