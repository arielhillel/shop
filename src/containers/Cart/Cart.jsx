import "./Cart.css";
import React, { useState } from "react";

const Cart = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (itemId) => {
    setCart(cart.push(itemId));
  };

  return <></>;
};

export default Cart;
