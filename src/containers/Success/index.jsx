import React, { useContext } from 'react';
import { Map } from '../../components';
import AppContext from '../../context/appContext';
import './styles.css';

function Success() {
  const {
    state: { buyer },
  } = useContext(AppContext);

  return (
    <div className="Success">
      <div className="Success-content">
        <h2>{`${buyer[0].name}, gracias por tu compra`}</h2>
        <spam>Tu pedido llegara en 3 dias</spam>
        <div className="Success-map">
          <Map />
        </div>
      </div>
    </div>
  );
}

export default Success;
