import React from 'react';

import { connect } from 'react-redux';

export const Home = ({ customers, notes }) => {
  return (
    <div className="level">
      <div className="level-item has-text-centered">
        <div>
          <p className="heading">Clientes</p>
          <p className="title">{ customers.length }</p>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div>
          <p className="heading">Notas Cadastradas</p>
          <p className="title">{ notes.length }</p>
        </div>
      </div>
    </div>
  )
}

function mapStateToProps(state, ownProps) {
  return {
    customers: state.customers,
    notes: state.notes
  }
}

export default connect(mapStateToProps)(Home);