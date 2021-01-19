import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Header() {
  return (
    <div className="Header">
      <h1 className="Header-title">
        <Link to="/">React Store</Link>
      </h1>
      <div className="Header-checkout">
        <Link to="/checkout">
          <i className="fas fa-shopping-cart" />
        </Link>
      </div>
    </div>
  );
}

export default Header;
