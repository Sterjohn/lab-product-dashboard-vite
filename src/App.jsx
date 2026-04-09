import React, { useState } from 'react';
import ProductList from './components/ProductList';

const App = () => {
  // Define initial product data matching db.json
  const [products, setProducts] = useState([
    { id: 1, name: 'Laptop', price: '$999', inStock: true },
    { id: 2, name: 'Phone', price: '$699', inStock: false },
    { id: 3, name: 'Tablet', price: '$499', inStock: true },
  ]);

  // State to manage filtering
  const [filter, setFilter] = useState('all');

  // Filter products based on availability
  const filteredProducts = filter === 'inStock'
    ? products.filter((p) => p.inStock)
    : products;

  // Remove a product by id
  const removeProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <div>
      <h1>Product Dashboard</h1>

      {/* Buttons to filter by availability */}
      <button onClick={() => setFilter('all')}>All</button>
      <button onClick={() => setFilter('inStock')}>In Stock</button>

      {/* Render ProductList with filtered products */}
      <ProductList products={filteredProducts} removeProduct={removeProduct} />
    </div>
  );
};

export default App;