import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function NavBar() {
  const location = useLocation();

  return (
    <header>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
              Filmes Populares
            </Link>
          </li>
          <li>
            <Link
              to="/featured"
              className={location.pathname === '/featured' ? 'active' : ''}
            >
              Em Destaque
            </Link>
          </li>
          <li>
            <Link
              to="/new-releases"
              className={location.pathname === '/new-releases' ? 'active' : ''}
            >
              Lançamentos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
