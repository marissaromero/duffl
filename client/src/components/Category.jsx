/* eslint-disable react/prop-types */
import React from 'react';
import Product from './Product';

function Category({ name, products, updateCart }) {
  return (
    <div>
      <div className="CategoryContainer">
        <div className="CategoryText">{name}</div>
      </div>
      <div className="ScrollFeed">
        <div className="ScrollContainer">
          {
            products.map((product) => (
              <Product
                updateCart={updateCart}
                key={product.product}
                name={product.product}
                price={product.price}
                image={product.image}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Category;
