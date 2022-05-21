import React from 'react'
import './Product.css'
import { useStateValue } from "./StateProvider";

function Product({title, image, price, rating}) {
      // { basket } : is the state of the global store
  // dispatch : is how we manipulate the DataLayer
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the DataLayer
    // dispatch is like a GUN, he's allow u to shut data into DataLayer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        title,
        image,
        price,
        rating,
      },
    });
  };

  return (
    <div className='product'>
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_,i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>

      <img className="product__image" src={image} alt='product'/>


      <button onClick={addToBasket} className="product__btn">
        Add to basket
      </button>
    </div>
  )
}

export default Product