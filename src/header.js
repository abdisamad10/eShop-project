import React from 'react';
import './Header.css';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search'; 
import { Link } from 'react-router-dom';
import { UseStateValue } from './StateProvider';


function Header () {

  const [{basket}, dispatch] = UseStateValue();
    return (
        <div className="Header">
          <Link to="/" style={{textDecoration: "none"}}>
          <div className='header_logo'>
              <StorefrontIcon className='headerLogoImage' fontSize='large'/>
              <h2 className='header_logoTitle'>eShop</h2>
         </div>
          </Link>
     

        <div className='header_search'>
          <input type='text' className='header_searchInput'/>
          <SearchIcon  className='headerSearchIcon' fontSize='large'/>
        </div>

        <div className='header_nav'>
        <Link to='/login' style={{textDecoration: "none"}}>
          <div className='nav_item'>
          <span className='nav_itemLineOne'>Hello Guest</span>
          <span className='nav_itemLineTwo'>Sign In</span>
          </div>
          </Link>

          <div className='nav_item'>
            <span className='nav_itemLineOne'>Your</span>
            <pan className='nav_itemLineTwo'>Shop</pan>
          </div>
          <Link to="/checkout" style={{textDecoration: "none"}}>
          <div className='nav_itemBasket'>
          <ShoppingBasketIcon/>
          <span className='nav_itemLineTwo nav_basketCount'>{basket.length}</span>
          </div>
          </Link>
         
          
        </div>
        </div>
    );
}

export default Header