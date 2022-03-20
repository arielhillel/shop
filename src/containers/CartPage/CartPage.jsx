import "./CartPage.css";
import React from "react";
import { addProduct, removeProduct } from "../../reducers/reducerCartArr";
import { useDispatch, useSelector } from "react-redux";

const CartPage = () => {
  let products = useSelector((s) => s.products);
  let cart = useSelector((s) => s.cartArr);
  const dispatchNow = useDispatch();
  return (
    <div className="wrapper">
      <div className="cartItems">
        {cart ? (
          (console.log(cart),
          cart.map((e) => {
            return (
              <>
                <div className="cartItem">
                  <div className="img">
                    <img
                      height={"85px"}
                      src={products[e - 1].image}
                      alt="Product Image"
                    />
                  </div>
                  <div className="info">
                    <h2>{products[e - 1].title}</h2>
                    <p>{products[e - 1].price}</p>
                  </div>
                  <div className="buttons">
                    <button
                      onClick={() => {
                        dispatchNow(removeProduct(e));
                      }}
                    >
                      -
                    </button>
                  </div>
                </div>
              </>
            );
          }))
        ) : (
          <h1>אין כלום</h1>
        )}
      </div>
    </div>
  );
};

export default CartPage;
