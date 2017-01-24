import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: 0,
      notes: 0
    }
  }
  
  render() {
    return (
      <div className="level">
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">Clientes</p>
            <p className="title">{ this.state.customers }</p>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">Notas Cadastradas</p>
            <p className="title">{ this.state.notes }</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;