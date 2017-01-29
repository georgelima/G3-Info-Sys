import React from 'react';

const Footer = () => (
  <footer className="footer" style={{ position: 'absolute', bottom: '0', width: '100%', height: '10px' }}>
    <div className="container">
      <div className="content has-text-centered">
        <p>
          <strong>G3 WebSys</strong> by <a href="http://github.com/georgelima">George Lima</a>.
        </p>
        <p>
          <a className="icon" href="https://facebook.com/">
            <i className="fa fa-facebook"></i>
          </a>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;