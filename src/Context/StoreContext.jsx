import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null)

const StoreContextProvider = ({children})=>{

    const[cartItems, setCartItems] = useState({});

    const addToCart = (itemId)=>{
        if(!cartItems[itemId]) {
            setCartItems((prev)=>({...prev,[itemId]:1}))
        } else {
            setCartItems((prev)=>({...prev, [itemId]:prev[itemId]+1}))
        }
    }

    const removeFromCart = (itemId)=>{
        setCartItems((prev)=>({...prev, [itemId]:prev[itemId]-1}))
    }

    const totalCartAmount = ()=> {
        let totalAmount = 0;
        for(const foodItem in cartItems){
            if(cartItems[foodItem]>0){
                let item = food_list.find((product)=>product._id === foodItem);
                totalAmount += item.price*cartItems[foodItem];
            } 
        }
        return totalAmount;
    }
    useEffect(()=>{console.log(cartItems)},[cartItems]);

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        totalCartAmount
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;