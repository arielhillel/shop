import { React } from "react";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import "./Products.css";

const Products = ({ products, addToCart }) => {
  return (
    <div className="products">
      {products ? (
        products.map((e) => {
          return (
            <div key={e.id} className="product-card">
              <Link to={"/Products/" + e.id}>
                <img src={e.image} height={250} />
              </Link>
              <h1 className="product-title">{e.title}</h1>
              <h3>$ {e.price}</h3>
              <h3>{e.category}</h3>
              <button
                onClick={() => {
                  addToCart(e.id);
                  console.log("שלב 1");
                }}
              >
                Add To Cart
              </button>
            </div>
          );
        })
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Products;
