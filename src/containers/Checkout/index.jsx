import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Checkout() {
  return (
    <div className="Checkout">
      <div className="Checkout-content">
        <h3>Lista de productos</h3>
        <div className="Checkout-item">
          <div className="Checkout-element">
            <h4>item name</h4>
            <span>$10</span>
          </div>
          <button type="button">
            <i className="fas fa-trash" />
          </button>
        </div>
      </div>
      <div className="Checkout-sidebar">
        <h3>Precio total: 100$</h3>
        <Link to="/checkout/information">
          <button type="button">Continuar</button>
        </Link>
      </div>
    </div>
  );
}

export default Checkout;
