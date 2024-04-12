import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets';

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-section' id='exploreSection'>
        <h1>Explore our menu</h1>
        <p>Choose from a diverse menu featuring a detectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
        <div className="exploreMenu">
            {menu_list.map((item,index)=>{
                return(
                    <div onClick={()=>{setCategory(prev => prev===item.menu_name?"all":item.menu_name)}} key={index} className="menu-item">
                        <img src={item.menu_image} className={category===item.menu_name?"active":""} alt="menu-item"/>
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr/>
    </div>
  )
}

export default ExploreMenu