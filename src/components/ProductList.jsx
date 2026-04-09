import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, removeProduct }) => {
  // Display message if no products available
  if (products.length === 0) {
    return <p>No products available</p>;
  }

  return (
    <div>
      {/* Iterate over products and render a ProductCard for each */}
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          removeProduct={removeProduct}
        />
      ))}
    </div>
  );
};

export default ProductList;