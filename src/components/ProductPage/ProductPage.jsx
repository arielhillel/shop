import { useParams } from "react-router-dom";
import React from "react";
import Loading from "../Loading/Loading";
import "./ProductPage.css";

const ProductPage = ({ products, addToCart }) => {
  let { id } = useParams();
  return (
    <>
      <div className="product-page">
        <div className="img-side">
          <img src={products[id - 1].image} alt="Product Image" width={400} />
        </div>
        <div className="info-side">
          <h1 style={{ fontSize: "42px" }}>{products[id - 1].title}</h1>
          <p style={{ fontSize: "22px" }}>{products[id - 1].description}</p>
          <h2>
            Category:&nbsp;&nbsp;
            {products[id - 1].category}
          </h2>
          <h2>Price:&nbsp;&nbsp; $ {products[id - 1].price}</h2>
          <p style={{ fontSize: "22px" }}>
            Quantity:&nbsp;&nbsp;
            {products[id - 1].rating.count}
          </p>
          <p style={{ fontSize: "22px" }}>
            Rate:&nbsp;&nbsp;
            {products[id - 1].rating.rate}
          </p>
          <button
            onClick={() => {
              addToCart(products[id - 1].id);
            }}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
