import React, { Component } from 'react';

import { Link } from 'react-router';

const Navbar = ({ clickButtomRight }) => {
  return (
    <nav className="nav">
      <div className="nav-left">
        
      </div>

      <div className="nav-center">
        <h1 className="nav-item title is-4"><Link to="/">G3 Informática</Link></h1>
      </div>
      <span className="nav-toggle">
        <span></span>
        <span></span>
        <span></span>
      </span>

      <div className="nav-right nav-menu">
        <span style={{ color: "white" }} className="nav-item">
          <a className="button is-danger" onClick={() => clickButtomRight() }>
            <span className="icon">
              <i className="fa fa-bug"></i>
            </span>
            <span>Reportar Problema</span>
          </a>
        </span>
      </div>
    </nav>
  )

}

export default Navbar;