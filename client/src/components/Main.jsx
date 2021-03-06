import React, { useState, useEffect } from 'react';
import SearchContainer from './SearchContainer';
import Promoted from './Promoted';
import Products from './Products';
import Cart from './Cart';
import productData from './data/productData';
import categoryData from './data/categoryData';

function Main() {
  const [products, setProducts] = useState(productData.slice(0, productData.length - 1));
  const [categories, setCategories] = useState(categoryData);
  const [promoted, setPromoted] = useState(productData[11]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(-2);

  const updateCart = (item) => {
    const updatedCart = cart.slice();
    if (updatedCart.indexOf(item) === -1) {
      updatedCart.push(item);
    } else {
      const index = updatedCart.indexOf(item);
      updatedCart.splice(index, 1, item);
    }
    setCart(updatedCart);
  };

  useEffect(() => {
    const updatedTotal = total + 1;
    setTotal(updatedTotal);
  }, [cart, setCart]);

  return (
    <div className="Main">
      <div className="Hero">
        <div className="HeroText">What are you in the mood for today?</div>
        <SearchContainer />
      </div>
      <div className="Feed">
        <Promoted
          image={promoted.image}
          name={promoted.product}
          price={promoted.price}
          updateCart={updateCart}
        />
        <Products products={products} categories={categories} updateCart={updateCart} />
      </div>
      <Cart total={total} />
    </div>
  );
}

export default Main;
