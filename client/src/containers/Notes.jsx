import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { deleteNote } from '../actions/NoteActions';

import Table from '../components/Table';

export class Notes extends Component {
  constructor(props) {
    super(props);
    this.dispatch = this.props.dispatch;
    this.state = {
      statusFetchNotes: true
    }
  }

  showNoteInfo(currentNote) {
    this.props.router.push(`note/${currentNote._id}`);
  }

  deleteNote(currentNote) {
    this.dispatch(deleteNote(currentNote));
  }

  render() {
    return (
      <div className="has-text-centered">
        <h1 className="title is-3">Notas Cadastradas</h1>
        <Table 
          body={ this.props.notes }          
          header={['Valor (R$)', 'Data da Nota', 'Info', 'Remover']}
          keys={['totalValue', 'createdAt']}
          isLoaded={ this.state.statusFetchNotes }
          onInfoClick={ this.showNoteInfo.bind(this) }
          onDeleteClick={ this.deleteNote.bind(this) }
          hasInfo
          hasDelete       
        />
        <Link to="note" className="button is-info">
          <span className="icon">
            <i className="fa fa-sticky-note"></i>
          </span>
          <span>Cadastrar Nota</span>
        </Link>
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