import React, { useContext } from "react";
import { ShopContext } from "../../Context/Shop-Context";

const Product = (props) => {
  const { id, ProductName, Price, ProductImage } = props.data;
  const { addToCart, CartItems } = useContext(ShopContext);

  const CartItemsAmounts=CartItems[id]
  return (
    <div className="product">
      <img
        src={ProductImage}
        style={{ width: "13rem", height: "13rem" }}
        alt="no"
      />
      <div className="producttitle">
        <p className="description">
          <b>{ProductName}</b>
        </p>
        <p>${Price}</p>
      </div>
      <button className="addtocartbtn" onClick={() => addToCart(id)}>
        Add To Cart {CartItemsAmounts >0 && <>({CartItemsAmounts})</>}
      </button>
    </div>
  );
};

export default Product;


