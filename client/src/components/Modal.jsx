import React, { PropTypes } from 'react';

const Modal = ({ okClick, closeClick, isActive, title, children, okText, cancelText }) => {
  const show = () => {
    return (
      <div id="modal" className="modal is-active">
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">{ title }</p>
            <button className="delete" onClick={ () => closeClick() }></button>
          </header>
          
          <section className="modal-card-body">

            { children }

          </section>
          
          <footer className="modal-card-foot">
            <a className="button is-primary" onClick={ () => okClick() }>{ okText || "Enviar" }</a>
            <a className="button" onClick={ () => closeClick() }>{ cancelText || "Cancelar" }</a>
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
  okClick: PropTypes.func,
  header: PropTypes.string,
  okText: PropTypes.string,
  cancelText: PropTypes.string
}


export default Modal;