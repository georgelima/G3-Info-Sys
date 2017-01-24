import React, { Component, PropTypes } from 'react';

class Modal extends Component {
  static propTypes = {
    closeClick: PropTypes.func.isRequired
  }
  
  show() {
    return (
      <div id="modal" className="modal is-active">
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Reportar Problema</p>
            <button className="delete" onClick={ () => this.props.closeClick() }></button>
          </header>
          <section className="modal-card-body">
            <label className="label">Descrição do Problema: </label>
            <p className="control">
              <textarea className="textarea" placeholder="..."></textarea>
            </p>
          </section>
          <footer className="modal-card-foot">
            <a className="button is-primary">Enviar</a>
            <a className="button" onClick={ () => this.props.closeClick() }>Cancelar</a>
          </footer>
        </div>
      </div>
    )
  }
  
  render() {
    return (
      this.props.isActive ? this.show() : null
    );
  }
}

export default Modal;