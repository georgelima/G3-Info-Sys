import React, { Component, PropTypes } from 'react';

const Modal = ({ okClick, closeClick, isActive }) => {
  const show = () => {
    return (
      <div id="modal" className="modal is-active">
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Reportar Problema</p>
            <button className="delete" onClick={ () => closeClick() }></button>
          </header>
          <section className="modal-card-body">
            <label className="label">Descrição do Problema: </label>
            <p className="control">
              <textarea className="textarea" placeholder="..."></textarea>
            </p>
          </section>
          <footer className="modal-card-foot">
            <a className="button is-primary" onClick={ () => okClick() }>Enviar</a>
            <a className="button" onClick={ () => closeClick() }>Cancelar</a>
          </footer>
        </div>
      </div>
    )
  };

  return (
    isActive ? show() : null
  );
}

Modal.propTypes = {
  closeClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  okClick: PropTypes.func
}


export default Modal;