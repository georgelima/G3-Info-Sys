import React, { Component } from 'react';

import { connect } from 'react-redux';

import Table from '../components/Table';
import ModalCustomer from '../components/ModalCustomer';

import { ADD_CUSTOMER, DELETE_CUSTOMER, CHANGE_CUSTOMER } from '../constants/ActionTypes'; 

// Just for test
function* idGenerator() {
  let i = 0;
  while(true) {
    yield (i++);
  }
}
const iteratorID = idGenerator();

// ----

export class Customers extends Component {  
  state = {
    statusFetchCustomers: true,
    showModalCustomer: false,
    showModalNewCustomer: false,
    customerModal: {}
  } 

  constructor(props) {
    super(props);
    this.dispatch = this.props.dispatch;
  }

  deleteCustomer(customer) {
    this.dispatch({ type: DELETE_CUSTOMER, customer: customer });
  } 

  showInfoCustomer(currentCustomer) {
    const customer = this.props.customers.filter((current) => {
      return current._id === currentCustomer._id;
    });

    this.setState({
      customerModal: customer[0],
      showModalCustomer: !this.state.showModalCustomer
    });
  } 

  closeModalNewCustomer() {
    this.setState({
      showModalNewCustomer: false
    });
  }

  showModalNewCustomer() {
    this.setState({
      showModalNewCustomer: true
    })
  }

  saveCustomerChanges(newCustomer) {
    this.dispatch({ type: CHANGE_CUSTOMER, customer: newCustomer });
    
    this.setState({
      showModalCustomer: false
    });
  }

  saveNewCustomer(newCustomer) {
    const _id = iteratorID.next();

    newCustomer._id = _id.value;

    this.dispatch({ type: ADD_CUSTOMER, customer: newCustomer });

    this.setState({
      showModalNewCustomer: false   
    });
  }
  
  render() {
    return (
      <div className="has-text-centered">
        <h1 className="title is-3">Clientes Cadastrados</h1>
        <Table 
          isLoaded={ this.state.statusFetchCustomers } 
          header={[ 'Nome', 'Email', 'Telefone', 'Cidade', 'Estado', 'Info', 'Remover' ]} 
          body={ this.props.customers }
          onDeleteClick={ this.deleteCustomer.bind(this) } 
          onInfoClick={ this.showInfoCustomer.bind(this) }           
        />
        <ModalCustomer 
          customer={ this.state.customerModal } 
          isActive={ this.state.showModalCustomer } 
          onOk={ this.saveCustomerChanges.bind(this) }
          onClose={ this.showInfoCustomer.bind(this) } 
        />
        <ModalCustomer  
          isActive={ this.state.showModalNewCustomer } 
          onOk={ this.saveNewCustomer.bind(this) }
          onClose={ this.closeModalNewCustomer.bind(this) } 
        />
        <button className="button is-info" onClick={ this.showModalNewCustomer.bind(this) }>Cadastrar Novo Cliente</button>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    customers: state.customers
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Customers);