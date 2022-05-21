import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img className='home__image' src='images/home__image.jpg' alt='' />
        <div className='home__row'>
          <Product
            title='The Lean Startup: How Today s Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses'
            price={12.99}
            image='images/product-1.jpg'
            rating={4}
          />
          <Product
            title='The Lean Startup: How Today s Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses'
            price={12.99}
            image='images/product-2.jpg'
            rating={4}
          />
        </div>
        <div className='home__row'>
          <Product
            title='The Lean Startup: How Today s Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses'
            price={12.99}
            image='images/product-3.jpg'
            rating={4}
          />
          <Product
            title='The Lean Startup: How Today s Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses'
            price={12.99}
            image='images/product-1.jpg'
            rating={4}
          />  
          <Product
            title='The Lean Startup: How Today s Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses'
            price={12.99}
            image='images/product-2.jpg'
            rating={4}
          />  
        </div>
        <div className='home__row'>
          <Product
            title='The Lean Startup: How Today s Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses'
            price={12.99}
            image='images/product-6.jpg'
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
