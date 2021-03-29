import React from 'react';

function Cart({ total }) {
  return (
    <div className="Cart">
      <img className="cartIcon" alt="cart" src="./media/CartIcon.svg" />
      <div className="CartCounter">{total}</div>
    </div>
  );
}

export default Cart;
