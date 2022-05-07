import React from "react";
import "./Product.css";

function Product({title, image, price, rating}) {
  //TODO: declare Things here (From USB)
  return (
    <div className='product'>
      <div className='product__info'>
        <p>The lean startup</p>
        <p className="product__price">
          <small>$</small>
          <strong>19.99</strong>
        </p>
        <div className="product__rating">
        {/* TODO: get from Github */}
        </div>
      </div>
    </div>
  );
}

export default Product;
