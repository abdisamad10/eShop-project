import React from 'react'
import './CheckoutProduct';
import './CheckoutProduct.css';

function CheckoutProduct() {
  return (
    <div className='checkoutProduct'>
      <img src='https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg' alt='' 
      className='checkoutProduct_image' />

      <div className='checkoutProduct_info'>
        <p className='checkoutProduct_title'> 
          Bannet Mystic 15.5 inch Laptop Shoulder Messager Sling Office Bag, Water repellennt Fabric for Men and Woman (Blue) <br /> and you get different colors
        </p>
        <p className='checkoutProduct_price'>
        <small>$</small>
        <strong>20</strong>
        </p>

        <div className='checkouProduct_rating'>
          ⭐⭐
        </div>
        <button>Remove from Basket</button>
      </div>
    </div>
  )
}

export default CheckoutProduct