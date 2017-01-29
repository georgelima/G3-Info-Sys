import React from 'react';

import { Link } from 'react-router';

const Menu = () => (
  <aside className="menu">
    <p className="menu-label">
      CLIENTES
    </p>
    <ul className="menu-list">
      <li>
        <Link to="customers">Listar Clientes</Link>
      </li>
    </ul>
    <p className="menu-label">
      NOTAS
    </p>
    <ul className="menu-list">
      <li>
        <Link to="notes">Notas Cadastradas</Link>                
      </li>
    </ul>
  </aside>
);

export default Menu;