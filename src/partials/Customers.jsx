import React, { Component } from 'react';

import Table from '../components/Table';
import ModalCustomer from '../components/ModalCustomer';

// Just for test
function* idGenerator() {
  let i = 0;
  while(true) {
    yield (i++);
  }
}
const iteratorID = idGenerator();

// ----

class Customers extends Component {  
  state = {
    customers: [],
    statusFetchCustomers: true,
    showModalCustomer: false,
    showModalNewCustomer: false,
    customerModal: {}
  } 

  deleteCustomer(_id) {
    console.log("Deleting", _id);
  } 

  showInfoCustomer(_id) {
    const customer = this.state.customers.filter((current) => {
      return current._id === _id;
    });
    
    this.setState({
      customerModal: customer[0],
      showModalCustomer: !this.state.showModalCustomer
    })
  } 

  closeModalNewCustomer() {
    this.setState({
      showModalNewCustomer: false
    })
  }

  showModalNewCustomer() {
    this.setState({
      showModalNewCustomer: true
    })
  }

  saveCustomerChanges(newCustomer) {
    this.setState({
      showModalCustomer: false
    });
  }

  saveNewCustomer(newCustomer) {
    const _id = iteratorID.next();
    console.log(_id.value);
    newCustomer._id = _id.value;
    this.setState({
      customers: this.state.customers.concat(newCustomer),
      showModalNewCustomer: false   
    });
  }
  
  render() {
    return (
      <div className="has-text-centered">
        <h1 className="title is-3">Clientes Cadastrados</h1>
        <Table 
          isLoaded={ this.state.statusFetchCustomers } 
          header={[ 'Nome', 'Email', 'Telefone', 'Cidade', 'Info', 'Remover' ]} 
          body={ this.state.customers }
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

export default Customers;