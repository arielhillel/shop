import "./CartPage.css";
import React from "react";

const CartPage = ({ products, cart, addToCart }) => {
  return (
    <>
      {cart ? (
        cart.map((e) => {
          return (
            <>
              <div className="img">
                <img src={products[e - 1].image} alt="Product Image" />
              </div>
              <div className="info">
                <h2>{products[e - 1].title}</h2>
                <p>{products[e - 1].price}</p>
                <p></p>
              </div>
            </>
          );
        })
      ) : (
        <h1>אין כלום</h1>
      )}
    </>
  );
};

export default CartPage;
