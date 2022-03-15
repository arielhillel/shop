import "./CartPage.css";
import React from "react";

const CartPage = ({ cart, addToCart }) => {
  return (
    <>
      {cart ? (
        cart.map((e) => {
          return e;
        })
      ) : (
        <h1>אין כלום</h1>
      )}
    </>
  );
};

export default CartPage;
