import React from 'react'
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import {getBasketTotal} from './Reducer';
import { UseStateValue } from './StateProvider';

function Subtotal() {
  const [{basket}, dispatch] = UseStateValue();
  return (
    <div className='subtotal'>
        <CurrencyFormat
        
        renderText={(value) => (
            <>
              <p>
                subtotal ({basket.length} items): <strong>${value}</strong>
              </p>
              <small className='subtotal_gift'>
                <input  type='checkbox'/> This oredr contains a subtotal gift
              </small>

            </>
        )}

        decimalScale={2}
        value = {getBasketTotal(basket)}
        displayType= {'text'}
        thousandSeparator ={true}
        />

        <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal