/* eslint-disable react/prop-types */
import React from 'react';
import Category from './category.jsx';

function Products({ products, categories, updateCart }) {
  return (
    <div className="Products">
      {
        categories.map((category) => (
          <Category
            name={category}
            products={products}
            key={category}
            updateCart={updateCart}
          />
        ))
      }
    </div>
  );
}

export default Products;
