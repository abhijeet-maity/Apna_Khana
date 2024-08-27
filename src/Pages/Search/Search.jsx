import React, { useContext } from 'react'
import { StoreContext } from '../../Context/StoreContext'
import { useState } from 'react';

// import '../../components/FoodItemCard/FoodItemCard.css'
import './Search.css';
import SearchedFoodItemCard from './SearchedFoodItem';

const Search = () => {
    const {food_list} = useContext(StoreContext);
    let[search, setSearch] = useState([]);
    let[text, setText] = useState("");

    let searchFoodFunc = (e) => {
        setText(e);
        console.log(text);
        let matchedData = food_list.filter((element) => {
          return (
            element.name.toLowerCase().includes(e.toLowerCase()) ||
            element.category.toLowerCase().includes(e.toLowerCase())
          );
        });
        setSearch(matchedData);
        console.log(matchedData);
    };

    return (
    <div className='Search-section'>

        <div className="main-search">
            <input
            type="text"
            placeholder="Search food here.."
            onChange={(e) => searchFoodFunc(e.target.value)}
            />
        </div>

        {text.length > 0 && search.length === 0 ? (
        <h2 className="not">We are appologized for not having that</h2>
      ) : (
        <div className="food-display" id="food-display">
          <div className="food_dishes">
            {search.length > 0
              ? search.map((item, index) => (
                  <SearchedFoodItemCard
                    key={index}
                    id={item._id}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    image={item.image}
                  />
                ))
              : food_list.map((item, index) => (
                  <SearchedFoodItemCard
                    key={index}
                    id={item._id}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    image={item.image}
                  />
                ))}
          </div>
        </div>
      )}


    </div>
  )
}

export default Search