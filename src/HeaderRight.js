import React from 'react'
import './Header.css'
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useStateValue } from "./StateProvider";

function HeaderRight() {
  const [{ basket, user }] = useStateValue();
  return (
    <div className="header">
    <div className="header__search">
    <input className="header__searchInput" />
    <SearchIcon className="header__searchIcon" />
    </div>

  <div className="header__nav">
    
      <div className="header__option">
        <span className="header__optionLineOne">
          Hello Geust
        </span>
        <span className="header__optionLineTwo">
          "Sign In"
        </span>
      </div>
    
    
      <div className="header__option">
        <span className="header__optionLineOne">Returns</span>
        <span className="header__optionLineTwo">& Orders</span>
      </div>
    
      <div className="header__option">
        <span className="header__optionLineOne">Your</span>
        <span className="header__optionLineTwo">Prime</span>
      </div>
    
      <div className="header__optionBasket">
        <ShoppingBasketIcon />
        <span className="header__optionLineTwo header__basketCount">
          {basket?.length}
        </span>
      </div>

  </div></div>
  )
}

export default HeaderRight