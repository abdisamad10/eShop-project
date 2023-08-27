import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import { UseStateValue } from './StateProvider';

function Checkout() {
    const [{basket}, dispatch] = UseStateValue();
  return (
    <div className='checkout'>
        <div className='checkout_left'>
            <img src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg ' alt=''
            className='checkout_ad' />
            <div>
                <h2 className='checkout_title'>
                    Your Shopping Basket
                </h2>
                {basket.map(item => (
                    <CheckoutProduct 
                    Id= {item.Id}
                    Title= {item.Title}
                    Price= {item.Price}
                    Image= {item.Image}
                    Rating= {item.Rating}
                    />
                )
                )}
            </div>
        </div>
        
        <div className='checkout_right'>
            <Subtotal />
        </div>
       
    </div>
  )
};

export default Checkout