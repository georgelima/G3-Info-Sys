import React, { Component } from 'react';

import './style.css';

import Menu from './components/Menu';
import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import Modal from './components/Modal';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalActive: false
    }
  }
  
  handleClickReport() {
    this.setState({
      isModalActive: !this.state.isModalActive
    });
  }

  render() {
    return (
      <div className="container">
        <div className="hero">
          <Navbar clickButtomRight={ this.handleClickReport.bind(this) }/>
          <div className="columns">
            <div className="column is-one-quarter">
              <Menu /> 
            </div>
            <div className="column" style={{ marginTop: "25px" }}>
              { this.props.children }
            </div>
            <Modal 
              isActive={ this.state.isModalActive } 
              closeClick={ this.handleClickReport.bind(this) }
              title="Reportar Problema"
              okText="Enviar"
              cancelText="Cancelar"
            >
              <div>
                <label className="label">Descrição do Problema: </label>
                <p className="control">
                  <textarea className="textarea" placeholder="..."></textarea>
                </p>
              </div>
            </Modal>
          </div>
          { /* <Footer /> */ }
        </div>
      </div>
    )
  }
}

export default App;