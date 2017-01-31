import React, { Component } from 'react';

import { connect } from 'react-redux';

import Table from '../components/Table';
import ModalCustomer from '../components/ModalCustomer';
import Loading from '../components/Loading';


import { 
  ADD_CUSTOMER, 
  DELETE_CUSTOMER, 
  CHANGE_CUSTOMER, 
  FETCH_CUSTOMERS_SUCCESS
 } from '../constants/ActionTypes'; 

import { fetchCustomers } from '../api/customerMethods';

export class Customers extends Component {  
  state = {
    fetchCustomersSuccess: false,
    fetchCustomersError: false,
    showModalCustomer: false,
    showModalNewCustomer: false,
    customerModal: {}
  } 

  constructor(props) {
    super(props);
    this.dispatch = this.props.dispatch;

    this.dispatch(dispatch => {
      fetchCustomers().then(res => {
        dispatch({ type: FETCH_CUSTOMERS_SUCCESS, customers: res.data.customers });
        this.setState({
          fetchCustomersSuccess: true
        }) 
      }).catch(err => {
        this.setState({
            fetchCustomersError: true
          });
          console.log(err);
      });  
    });
  
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
    
    this.dispatch({ type: ADD_CUSTOMER, customer: newCustomer });

    this.setState({
      showModalNewCustomer: false   
    });
  }
  
  renderContent() {
    if (this.state.fetchCustomersError === true) {
      return (
        <div style={{ marginTop: "60px" }} className="has-text-centered notification is-danger">
          Houve um erro ao processar sua requisição!
        </div>
      )
    }

    if (this.state.fetchCustomersSuccess === true) {
      return (
        <div className="has-text-centered">
          <h1 className="title is-3">Clientes Cadastrados</h1>
          <Table 
            isLoaded={ this.state.fetchCustomersSuccess } 
            header={[ 'Nome', 'Email', 'Telefone', 'Cidade', 'Estado', 'Info', 'Remover' ]} 
            body={ this.props.customers }
            onDeleteClick={ this.deleteCustomer.bind(this) } 
            onInfoClick={ this.showInfoCustomer.bind(this) }
            hasInfo
            hasDelete           
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
          <button className="button is-info" onClick={ this.showModalNewCustomer.bind(this) }>Cadastrar Cliente</button>
        </div>
      )
    }
    
    return <Loading />;
  }

  render() {
    return this.renderContent()
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