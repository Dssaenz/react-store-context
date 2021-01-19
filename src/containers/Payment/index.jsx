import React from 'react';
import './styles.css';

function Payment() {
  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido</h3>
        <div className="Payment-button">Pagar con Paypal</div>
      </div>
    </div>
  );
}

export default Payment;
