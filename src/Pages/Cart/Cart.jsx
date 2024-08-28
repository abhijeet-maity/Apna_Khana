import { useContext, useState, useEffect } from 'react';
import './Cart.css';
import { StoreContext } from '../../Context/StoreContext'
import {useNavigate} from 'react-router-dom'
import {auth, db} from "../../fireBase/firebase.jsx";
import {getDoc, doc} from "firebase/firestore";
import { toast } from 'react-toastify';

const Cart = ({setShowLogin}) => {
  const navigate = useNavigate();
  const {cartItems, food_list, removeFromCart, totalCartAmount} = useContext(StoreContext);
  const [userDetails, setUserDetails] = useState(null);

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user);
      const docRef = doc(db, "Users", user.uid);
      const docSnap = await getDoc(docRef);
      if(docSnap.exists()) {
        setUserDetails(docSnap.data());
        console.log(docSnap.data());
      } else {
        console.log("User is not logged in");
        toast.error("User is not logged in", {
          position : "bottom-center",
        })
      }
    });
  };

  const alertUserToLogin = () => {
    console.log("You have to Login to Proceed further");
    toast.error("You have to Login to Proceed further",{
      position : "top-center",
    })
    setShowLogin(true);
  }

  useEffect(() => {
    fetchUserData();
  },[]);

  return (
    <div className='cart'>
      <div className="cartItems">
        <div className="cartItemsTitle">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br/>
        <hr/>
        {food_list.map((food)=>{
          if(cartItems[food._id]>0){
            return (
              <div key={food._id}>
                <div className='cartItemsTitle cartItemsItem'>
                  <img src={food.image}/>
                  <p>{food.name}</p>
                  <p>&#8377;  {food.price}</p>
                  <p>{cartItems[food._id]}</p>
                  <p>&#8377;  {food.price*cartItems[food._id]}</p>
                  <button onClick={()=>removeFromCart(food._id)} className='removeit'>remove</button>
                </div>
                <hr/>
              </div>
            )
          }
        })}
      </div>
      <div className="cartTotal-section">
        <div className="cart-Total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>subtotal</p>
              <p>&#8377;  {totalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>&#8377;  {totalCartAmount()===0?0:40}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>&#8377;  {totalCartAmount()===0?0:totalCartAmount() + 40}</b>
            </div>
          </div>
          {userDetails ? (<button onClick={()=>navigate('/PlaceOrder')}>PROCEED TO CHECKOUT</button>) : (
            <button onClick={alertUserToLogin}>PROCEED TO CHECKOUT</button>
          )}
          
        </div>
        <div className="promocode">
          <div className="promocode-details">
            <p>If you have a promocode, Enter it here</p>
            <div className="promocode-inp">
              <input type="text" placeholder='Promocode' />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart