import React from 'react';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product, removeProduct }) => {
  // Apply conditional class for out-of-stock items
  const cardClass = product.inStock
    ? styles.productCard
    : `${styles.productCard} outOfStockClass`;

  return (
    <div className={cardClass}>
      {/* Display product name */}
      <p>{product.name}</p>

      {/* Display product price */}
      <p>{product.price}</p>

      {/* Show stock status */}
      <p>{product.inStock ? 'In Stock' : 'Out of Stock'}</p>

      {/* Remove button */}
      <button onClick={() => removeProduct(product.id)}>Remove</button>
    </div>
  );
};

export default ProductCard;