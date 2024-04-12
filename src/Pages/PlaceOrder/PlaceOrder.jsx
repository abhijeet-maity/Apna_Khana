import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../Context/StoreContext'

const PlaceOrder = () => {

  const {totalCartAmount} = useContext(StoreContext);

  return (
    <form action="" className='PlaceOrderSection'>
      <div className="leftSide">
        <p className="info">Delivery Information</p>
        <div className="multifields">
          <input type="text" placeholder="First name" id="" />
          <input type="text" placeholder="Last name" id="" />
        </div>
        <input type="text" placeholder="Email address" id="" />
        <input type="text" placeholder="Street" id="" />
        <div className="multifields">
          <input type="text" placeholder="City" id="" />
          <input type="text" placeholder="State" id="" />
        </div>
        <div className="multifields">
          <input type="text" placeholder="Zip code" id="" />
          <input type="text" placeholder="Country" id="" />
        </div>
        <input type="text" placeholder='Phone'/>
      </div>
      <div className="rightSide">
      <div className="cart-Total">
          <h2>Cart Toatals</h2>
          <div>
            <div className="cart-total-details">
              <p>subtotal</p>
              <p>&#8377;  {totalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>&#8377;  {totalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>&#8377;  {totalCartAmount()===0?0:totalCartAmount() + 2}</b>
            </div>
          </div>
          <button>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder