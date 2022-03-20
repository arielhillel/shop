import { React } from "react";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import "./Products.css";
import { addProduct, removeProduct } from "../../reducers/reducerCartArr";
import { useDispatch, useSelector } from "react-redux";

const Products = ({ addToCart }) => {
  let products = useSelector((s) => s.products);
  let cartArr = useSelector((s) => s.cartArr);
  const dispatchNow = useDispatch();
  return (
    <div className="products">
      {products ? (
        products.map((e) => {
          return (
            <div key={e.id} className="product-card">
              <Link to={"/Products/" + e.id}>
                <img src={e.image} height={200} />
              </Link>
              <h1 className="product-title">{e.title}</h1>
              <h3>$ {e.price}</h3>
              <h3>{e.category}</h3>
              <button
                onClick={() => {
                  dispatchNow(addProduct(e.id));
                  console.log(cartArr);
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
