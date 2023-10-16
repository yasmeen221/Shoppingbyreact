import React, {useState } from 'react'
import { createContext } from 'react'
import { PRODUCTS } from '../Products';


export const ShopContext =createContext(null)

const getDefultCart=()=>{
    let cart={};
    for(let i=1 ; i< PRODUCTS.length+1 ; i++){
        cart[i]=0
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const[CartItems,SetCartItems]=useState(getDefultCart());

    const addToCart =(itemsId)=>{
        SetCartItems((prev)=>({...prev, [itemsId]: prev[itemsId] + 1}))
    };

    const removeFromCart =(itemsId)=>{
        SetCartItems((prev)=>({...prev, [itemsId]: prev[itemsId] - 1}))
    };

    const updataCartItemmount=(newAmount,itemId)=>{
        SetCartItems((prev)=>({...prev,[itemId]:newAmount}))
    }

    const getTotalCartAmount =()=>{
        let TotalAmount= 0;
        for(const item in CartItems){
            if (CartItems[item]>0){
                let ItemInfo= PRODUCTS.find((product)=>product.id===Number(item));
                TotalAmount += CartItems[item]*ItemInfo.Price;
            }
        }
        return TotalAmount
    }



    const ContextValue={CartItems,addToCart,removeFromCart, updataCartItemmount,getTotalCartAmount}
  return (
    <ShopContext.Provider value={ContextValue}>{props.children}</ShopContext.Provider>
  )
}

export default ShopContextProvider