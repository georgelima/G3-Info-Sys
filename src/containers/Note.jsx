import React, { Component } from 'react';

import { browserHistory } from 'react-router'

class Note extends Component {
  componentWillUnmount() {
    // problema com o roteador ao sair desse componente
    browserHistory.replace('/');
  }

  render() {
    return (<h1>Nota { this.props.params.id }</h1>);
  }
}

export default Note;