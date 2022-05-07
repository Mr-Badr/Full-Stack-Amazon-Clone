import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <Link>
          {/* TODO: get the image src */}
          <img className='home__image' src='' alt='' />
        </Link>
        <div className='home__row'>
          <Product title='The lean startup' />
          <Product />
        </div>
        <div className='home__row'>
          {/* Product */}
          {/* Product */}
          {/* Product */}
        </div>
        <div className='home__row'>{/* Product */}</div>
      </div>
    </div>
  );
}

export default Home;
