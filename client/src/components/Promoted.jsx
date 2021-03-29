/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';

function Promoted({ image, name, price, updateCart }) {
  const [quantity, setQuantity] = useState(0);

  function handleClick(e) {
    e.preventDefault();
    setQuantity(quantity + 1);
  }

  useEffect(() => {
    const item = {
      product: name,
      price: price,
      image: image,
      quantity: quantity
    };
    updateCart(item);
  }, [quantity, setQuantity]);

  return (
    <div className="Promoted">
      <div className="CategoryContainer" id="Promoted">
        <div className="CategoryText">Promoted</div>
        <div className="ProductCard.FullWidth">
          <div className="ProductImageContainer">
          <button className="AddButton" type="button" onClick={handleClick}>+</button>
            { (quantity > 0) ? (
              <div>
                <img className="ProductImage" src={image} alt="product" id="Active" />
                <div className="CardNotification">
                  {quantity} added to cart
                </div>
              </div>
            ) : (
              <img className="ProductImage" src={image} alt="product" />
            )}
          </div>
          <div className="ProductInfo">
            <div className="ProductTitle">{name}</div>
            <div className="ProductPrice">{price}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Promoted;
