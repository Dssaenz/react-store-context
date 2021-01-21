import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../../context/appContext';
import './styles.css';

function Checkout() {
  const {
    state: { cart },
    removeToCart,
  } = useContext(AppContext);
  const handleToDeleteCart = (item) => () => {
    removeToCart(item);
  };

  const handleSumTotal = () => {
    const reducer = (acummulator, currentValue) =>
      acummulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        <h3>Lista de productos</h3>

        {cart.map((item) => (
          <div key={item.id} className="Checkout-item">
            <div className="Checkout-element">
              <h4>{item.title}</h4>
              <span>{item.price}</span>
            </div>
            <button type="button" onClick={handleToDeleteCart(item)}>
              <i className="fas fa-trash" />
            </button>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>{`Precio total: $ ${handleSumTotal()}`}</h3>
          <Link to="/checkout/information">
            <button type="button">Continuar</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Checkout;
