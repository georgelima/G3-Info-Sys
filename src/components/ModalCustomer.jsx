import React, { Component, PropTypes } from 'react';

import FormCustomer from './FormCustomer';

const ModalCustomer = ({ isActive, onClose, onOk, customer = {} }) => {
  const props = {
    isActive,
    onClose,
    onOk,
    customer
  }

  function handleOk(event) {
    event.preventDefault();
    return onOk(customer);
  }
  
  function show() {
    return (
      <div className="modal is-active">
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Informações: </p>
            <button onClick={ onClose } className="delete"></button>
          </header>
          <section className="modal-card-body">
            
            <FormCustomer {...props } />
            
          </section>
        </div>
      </div>
    )
  }
  

  return (
    isActive ? show() : null
  )

}

ModalCustomer.propTypes = {
  isActive: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
  onOk: PropTypes.func,
  customer: PropTypes.object
}

export default ModalCustomer;