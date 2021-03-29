/* eslint-disable react/prop-types */
import React from 'react';

function Promoted({ image, name, price }) {
  return (
    <div className="Promoted">
      <div className="CategoryContainer" id="Promoted">
        <div className="CategoryText">Promoted</div>
        <div className="ProductCard.FullWidth">
          <div className="ProductImageContainer">
            <button className="AddButton" type="button">+</button>
            {/* <div className="Card Notification">1 added to cart </div> */}
            <img className="ProductImage" src={image} alt="promoted product" />
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
