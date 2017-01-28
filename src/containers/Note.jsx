import React, { Component } from 'react';
import { browserHistory } from 'react-router'
import { connect } from 'react-redux';

import { addNote } from '../actions/NoteActions';

import Select from '../components/Select';
import Table from '../components/Table';
import Modal from '../components/Modal';

// Just for test
function* idGenerator() {
  let i = 0;
  while(true) {
    yield (i++);
  }
}
const iteratorID = idGenerator();

// ----

export class Note extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalActive: false,
      items: [],
      customer: null,
      totalValue: 0
    }
  }

  componentWillUnmount() {
    // problema com o roteador ao sair desse componente
    browserHistory.replace('/notes');
  }

  closeModal() {
    this.setState({
      isModalActive: false
    })
  }

  showModalItem() {
    this.setState({
      isModalActive: true
    })
  }

  onSelectCustomer(customerId) {
    this.setState({ customer: customerId })
  }

  isNumber(val) {
    if (!isNaN(parseFloat(val)) && isFinite(val)) {
      return true;
    } else {
      return false;
    }
  }

  isNull(val) {
    if (val === null || val === undefined) {
      return true;
    } else {
      return false;
    }
  }

  addItem() {
    const item = this.refs.item.value;
    const unitValue = this.refs.unitValue.value.replace(',', '.');
    const amount = this.refs.amount.value.replace(',', '.');
    const totalValue = unitValue * amount;
    const _id = iteratorID.next().value;

    if (!this.isNumber(unitValue) || !this.isNumber(amount)) {
      alert("Informe valores válidos!");
      return;
    }

    if (this.isNull(unitValue) || this.isNull(amount) || this.isNull(item)) {
      alert("Todos os campos são obrigatórios!");
      return;
    }

    this.setState({
      items: this.state.items.concat({ _id: _id, item: item, unitValue: unitValue, amount: amount, totalValue: totalValue }),
      isModalActive: false,
      totalValue: this.state.totalValue + totalValue
    });
  }

  deleteItem(item) {
    this.setState({
      items: this.state.items.filter(currentItem => currentItem._id !== item._id)
    });
  }

  saveNote() {
    const note = {
      customerId: this.state.customer,
      items: this.state.items,
      totalValue: this.state.totalValue,
      createdAt: (new Date()).toString()
    }

    this.props.dispatch(addNote(note));

    browserHistory.replace('/notes');
  }

  render() {
    return (
      <div>
        <h1 className="has-text-centered title is-3">Cadastrar Nota</h1>
        <h4 className="title is-5">Cliente:</h4>
        <Select 
          options={ this.props.customers } 
          onSelect={ this.onSelectCustomer.bind(this) }
          propValue="_id"
          propContent="name" 
        />
        <h4 className="title is-5">Itens:</h4>
        <Table 
          isLoaded={ true }
          header={['Nome do Produto', 'Quantidade', 'Preço Unitário (R$)', 'Preço Total (R$)', 'Excluir']}
          body={ this.state.items }
          onDeleteClick={ this.deleteItem.bind(this) }
          hasDelete
        />
        <div className="columns">
          <div className="column is-4 is-offset-5">
            <button onClick={ () => this.showModalItem() } className="button is-success is-small">Adicionar Item</button>
          </div>
        </div>
        <Modal 
          isActive={ this.state.isModalActive } 
          closeClick={ this.closeModal.bind(this) }
          title="Adicionar Item"
          okText="Adicionar"
          cancelText="Cancelar"
          okClick={ this.addItem.bind(this) }
        >
          
          <div className="columns">  
            <div className="column">
              <label className="label">Item: </label>
              <p className="control">
                <input type="text" className="input" ref="item"/>
              </p>
            </div>
          </div>
          <div className="columns">  
            <div className="column">
              <label className="label">Valor Unitário: </label>
              <p className="control">
                <input type="text" className="input" ref="unitValue" />
              </p>
            </div>
            <div className="column">
              <label className="label">Quantidade: </label>
              <p className="control">
                <input type="text" className="input" ref="amount" />
              </p>
            </div>
          </div> 
        </Modal>
        
        <div className="columns">
          <div className="column is-4">
            <p className="subtitle is-6">
              <strong>VALOR TOTAL: R$ { this.state.totalValue }</strong>
            </p>
          </div>
          <div className="column is-offset-6">
            {
              this.state.customer ? 
              <button 
                className="button is-medium is-ligth" 
                onClick={ this.saveNote.bind(this) }>
                Salvar Nota
              </button> :
              <button 
                className="button is-medium is-ligth" 
                onClick={ this.saveNote.bind(this) } disabled>
                Salvar Nota
              </button>
            }
          </div>
        </div>  
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    customers: state.customers
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Note);