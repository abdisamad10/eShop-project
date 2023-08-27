import React from 'react'
import './CheckoutProduct';
import './CheckoutProduct.css';
import { UseStateValue } from './StateProvider';

function CheckoutProduct({Image, Id, Price, Rating, Title}) {
  const [{basket}, dispatch] = UseStateValue();

  const removeFromBasket = () => {
      dispatch({
        type: "REMOVE_FROM_BASKET",
        Id : Id,
      })
  }
  return (
    <div className='checkoutProduct'>
      <img src={Image} alt='' 
      className='checkoutProduct_image' />

      <div className='checkoutProduct_info'>
        <p className='checkoutProduct_title'> 
        Title
        </p>
        <p className='checkoutProduct_price'>
        <small>$</small>
        <strong>{Price}</strong>
        </p>

        <div className='checkouProduct_rating'>
             {Array(Rating)
                 .fill()
                 .map((_, i) => (
                  <p>⭐</p>
             ))}
        </div>
        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  )
}

export default CheckoutProduct