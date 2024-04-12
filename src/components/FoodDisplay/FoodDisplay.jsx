import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../Context/StoreContext'
import FoodItemCard from '../FoodItemCard/FoodItemCard';

const FoodDisplay = ({category}) => {

  const{food_list} = useContext(StoreContext);

  return (
    <div className='foodDisplay-Section' id='foodDisplay'>
        <h2>Top dishes near you</h2>
        <div className="food_dishes">
            {food_list.map((food,index)=>{
              if(category === "all" || category === food.category) {
                return <FoodItemCard key={index} id={food._id} name={food.name} price={food.price} description={food.description} image={food.image}/> 
              }
            })}
        </div>
    </div>
  )
}

export default FoodDisplay