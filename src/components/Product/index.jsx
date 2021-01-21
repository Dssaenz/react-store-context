import React from 'react';
import './styles.css';

function Product({ product, handleAddToCard }) {
  return (
    <div className="Products-item">
      <img src={product.image} alt={product.title} />
      <div className="Products-item-info">
        <h2>
          {product.title}
          {' '}
          <spam>{product.price}</spam>
        </h2>
        <p>{product.description}</p>
      </div>
      <button type="button" onClick={handleAddToCard(product)}>
        Comprar
      </button>
    </div>
  );
}

export default Product;
