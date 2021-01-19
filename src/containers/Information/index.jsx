import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Information() {
  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2> Informacion de contacto</h2>
        </div>
        <div className="Information-form">
          <form action="">
            <input type="text" placeholder="Nombre Completo" name="name" />
            <input type="email" placeholder="Correo electrónico" name="email" />
            <input type="text" placeholder="Dirección" name="address" />
            <input type="text" placeholder="Apto" name="apto" />
            <input type="text" placeholder="Country" name="country" />
            <input type="text" placeholder="City" name="city" />
            <input type="text" placeholder="Estado" name="state" />
            <input type="text" placeholder="Código postal" name="cp" />
            <input type="text" placeholder="Teléfono" name="phone" />
          </form>
        </div>
        <div className="Information-buttons">
          <div className="Information-next">Regresar</div>
          <div className="Information-back">
            <Link to="/checkout/payment">Pagar</Link>
          </div>
        </div>
      </div>

      <div className="Information-sidebar">
        <h3>Pedido:</h3>
        <div className="Information-item">
          <div className="Information-element">
            <h4>Item Name</h4>
            <pan>$10</pan>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;
