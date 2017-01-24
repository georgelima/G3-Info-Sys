import React, { Component, PropTypes } from 'react';

import FormCustomer from './FormCustomer';

class ModalCustomer extends Component {
  static propTypes = {
    isActive: PropTypes.bool.isRequired,
    onClose: PropTypes.func,
    onOk: PropTypes.func,
    customer: PropTypes.object
  }

  defaultProps = {
    customer: {}
  }

  handleOk(event) {
    event.preventDefault();
    return this.props.onOk(this.props.customer);
  }
  
  show() {
    return (
      <div className="modal is-active">
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Informações: </p>
            <button onClick={ this.props.onClose } className="delete"></button>
          </header>
          <section className="modal-card-body">
            
            <FormCustomer {...this.props } />
            
          </section>
        </div>
      </div>
    )
  }
  
  render() {
    return (
      this.props.isActive ? this.show() : null
    )
  }
}

export default ModalCustomer;