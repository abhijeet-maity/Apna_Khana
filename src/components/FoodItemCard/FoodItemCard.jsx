import React, { useContext} from 'react'
import './FoodItemCard.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext';

const FoodItemCard = ({name,price,description,image,id}) => {

  // const[itemCount,setItemCount] = useState(0);
  const{cartItems,addToCart,removeFromCart} = useContext(StoreContext);

  return (
    <div className='FoodItem'>
        <div className="foodItemImg">
            <img src={image} alt="food" className='food-img'/>
            {
              !cartItems[id] 
              ? <img src={assets.add_icon_white} onClick={()=>addToCart(id)} alt="plus" className="add"/>
              :<div className="foodItemcounter">
                  <img src={assets.add_icon_green} onClick={()=>addToCart(id)} alt="increment" className="increase"/>
                  <p>{cartItems[id]}</p>
                  <img src={assets.remove_icon_red} onClick={()=>removeFromCart(id)} alt="decrement" className="decrease"/>
              </div>
            }
        </div>
        <div className="foodInfo">
            <div className="food-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} />
            </div>
            <p className='food-description'>{description}</p>
            <p className='food-price'>Rs. {price}/-</p>
        </div>
    </div>
  )
}

export default FoodItemCard