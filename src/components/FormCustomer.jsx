import React, { Component, PropTypes } from 'react';

class FormCustomer extends Component {
  static propTypes = {
    customer: PropTypes.object
  }

  static defaultProps = {
    customer: null
  }

  componentDidMount() {
    // console.log(this.props);
  }
  
  handleOk(event) {
    event.preventDefault();

    let newCustomer = {};

    newCustomer._id = this.props.customer ? this.props.customer._id : null;  
    newCustomer.name = this.refs.name.value;
    newCustomer.email = this.refs.email.value;
    newCustomer.cellphone = this.refs.cellphone.value;
    newCustomer.city = this.refs.city.value;
    newCustomer.state = this.refs.state.value;

    return this.props.onOk(newCustomer);
  }

  renderFormNewCustomer() {
    return (
      <form>
        <div className="columns">
          <div className="column">
            <label className="label">Nome</label>
            <p className="control">
              <input className="input" type="text" placeholder="Nome" ref="name" required />
            </p>
          </div>
        </div>

        <div className="columns">
          <div className="column">
            <label className="label">Email: </label>
            <p className="control">
              <input className="input" type="email" placeholder="Email" ref="email" />
            </p>
          </div>
        </div>  

        <div className="columns">
          <div className="column">
            <label className="label">Telefone: </label>
            <p className="control">
              <input className="input" type="text" placeholder="Telefone" ref="cellphone" />
            </p>
          </div>
          <div className="column">
            <label className="label">Cidade: </label>
            <p className="control">
              <input className="input" type="text" placeholder="Cidade" ref="city" />
            </p>
          </div>
          <div className="column">
            <label className="label">Estado: </label>
            <p className="control">
              <input className="input" type="text" placeholder="Estado" ref="state" />
            </p>
          </div>
        </div>  
        <button type="submit" className="button is-success" onClick={ (event) => this.handleOk(event) }>Salvar Mudanças</button>  
      </form>
    )
  }

  renderFormUpdateCustomer() {
    return (
      <form>
        <div className="columns">
          <div className="column">
            <label className="label">Nome</label>
            <p className="control">
              <input className="input" type="text" placeholder="Nome" defaultValue={ this.props.customer.name } ref="name" />
            </p>
          </div>
        </div>

        <div className="columns">
          <div className="column">
            <label className="label">Email: </label>
            <p className="control">
              <input className="input" type="text" placeholder="Email" defaultValue={ this.props.customer.email } ref="email" />
            </p>
          </div>
        </div>  

        <div className="columns">
          <div className="column">
            <label className="label">Telefone: </label>
            <p className="control">
              <input className="input" type="text" placeholder="Telefone" defaultValue={ this.props.customer.cellphone } ref="cellphone" />
            </p>
          </div>
          <div className="column">
            <label className="label">Cidade: </label>
            <p className="control">
              <input className="input" type="text" placeholder="Cidade" defaultValue={ this.props.customer.city } ref="city" />
            </p>
          </div>
          <div className="column">
            <label className="label">Estado: </label>
            <p className="control">
              <input className="input" type="text" placeholder="Estado" defaultValue={ this.props.customer.state } ref="state" />
            </p>
          </div>
        </div>  
        <button type="submit" className="button is-success" onClick={ (event) => this.handleOk(event) }>Salvar Mudanças</button>  
      </form>
    )
  }

  render() {
    return (
      this.props.customer ? this.renderFormUpdateCustomer() : this.renderFormNewCustomer() 
    )
  }
}

export default FormCustomer;