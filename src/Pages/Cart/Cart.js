import React, { useContext } from "react";
import './Cart.css'
import { PRODUCTS } from "../../Products";
import { ShopContext } from "../../Context/Shop-Context";
import CartItem from "./Cart-Item";
import { Navigate, useNavigate } from "react-router-dom";

const Cart = () => {
  const {CartItems,getTotalCartAmount} = useContext(ShopContext);
  const TotalAmount=getTotalCartAmount();
  const navigate= useNavigate();
  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartitems">
        {PRODUCTS.map((product) => {
          if (CartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>
      {TotalAmount>0 ?
      <div className="checkout">
        
        <p>Subtotal:${TotalAmount}</p>
        <button onClick={()=> navigate("/")}>Continue Shopping</button>
        

      </div>
: <h1>Your Cart is Empty</h1>}
    </div>
  );
};

export default Cart;
