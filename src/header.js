import './Header.css'


import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search'; 


function Header () {
    return (
        <div className="Header">
 <div className='header_logo'>
          <StorefrontIcon className='headerLogoImage' fontSize='large'/>
          <h2 className='header_logoTitle'>eShop</h2>
        </div>

        <div className='header_search'>
          <input type='text' className='header_searchInput'/>
          <SearchIcon  className='headerSearchIcon' fontSize='large'/>
        </div>

        <div className='header_nav'>
          <div className='nav_item'>
          <span className='nav_itemLineOne'>Hello Guest</span>
          <span className='nav_itemLineTwo'>Sign In</span>
          </div>

          <div className='nav_item'>
            <span className='nav_itemLineOne'>Your</span>
            <pan className='nav_itemLineTwo'>Shop</pan>
          </div>

          <div className='nav_item'>
          <ShoppingBasketIcon className='itemBasket'/>
          <span className='nav_itemLineTwo nav_basketCount' >0</span>
          </div>
          
        </div>
        </div>
    );
}

export default Header