import React, { Component } from 'react';

import Table from '../components/Table';

class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statusFetchNotes: true
    }
  }

  render() {
    return (
      <div className="has-text-centered">
        <h1 className="title is-3">Notas Cadastradas</h1>
        <Table 
          body={[]}
          header={['Cliente', 'Valor', 'Info', 'Remover']}
          isLoaded={ this.state.statusFetchNotes }       
        />  
      </div>
    )
  }
}

export default Notes;