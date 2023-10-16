import React, { useContext } from "react";
import { ShopContext } from "../../Context/Shop-Context";

const CartItem = (props) => {
    const {id, ProductName, Price, ProductImage } = props.data;
    const {CartItems,addToCart,removeFromCart, updataCartItemmount} = useContext(ShopContext);
  return (
    <div className='cart-item'>
         <img
        src={ProductImage}
        style={{ width: "13rem", height: "13rem" }}
        alt="no"
      />
        <div className='description'>
        <p>
          <b>{ProductName}</b>
        </p>
        <p>${Price}</p>
        <div className='counHandler'>
          <button onClick={()=>removeFromCart(id)}>-</button>
          <input value={CartItems[id]} onChange={(e)=> updataCartItemmount(Number(e.target.value),id )}/>
          <button onClick={()=>addToCart(id)}>+</button>
        </div>

        </div>
    </div>
  )
}

export default CartItem