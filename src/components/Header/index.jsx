import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../../context/appContext';
import './styles.css';

function Header() {
  const {
    state: { cart },
  } = useContext(AppContext);
  return (
    <div className="Header">
      <h1 className="Header-title">
        <Link to="/">React Store</Link>
      </h1>
      <div className="Header-checkout">
        <Link to="/checkout">
          <i className="fas fa-shopping-cart" />
        </Link>
        {cart.length > 0 && <div className="Header-alert">{cart.length}</div>}
      </div>
    </div>
  );
}

export default Header;
