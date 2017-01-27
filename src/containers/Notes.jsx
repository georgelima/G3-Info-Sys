import React, { Component } from 'react';

import { browserHistory } from 'react-router';

import { connect } from 'react-redux';

import Table from '../components/Table';

export class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statusFetchNotes: true
    }
  }

  showNoteInfo(currentNote) {
    browserHistory.replace(`${location.pathname}/${currentNote._id}`)
  }

  render() {
    return (
      <div className="has-text-centered">
        <h1 className="title is-3">Notas Cadastradas</h1>
        <Table 
          body={[{ _id: 0, customer: 'George', totalValue: 500 }]}
          header={['Cliente', 'Valor', 'Info', 'Remover']}
          isLoaded={ this.state.statusFetchNotes }
          onInfoClick={ this.showNoteInfo.bind(this) }       
        />  
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    notes: state.notes
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatch
  }
} 

export default connect(mapStateToProps, mapDispatchToProps)(Notes);