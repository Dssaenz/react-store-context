import React, { useContext } from 'react';
import { Product } from '../../components';
import AppContext from '../../context/appContext';
import './styles.css';

function Products() {
  const {
    state: { products },
    addToCart,
  } = useContext(AppContext);

  const handleAddToCard = (product) => () => {
    addToCart(product);
  };

  return (
    <div className="Products">
      <div className="Products-items">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCard={handleAddToCard}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
