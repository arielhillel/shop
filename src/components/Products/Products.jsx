import { React, useEffect, useState } from "react";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState();
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  let answer = <div>Loading</div>;

  if (products) {
    answer = products.map((e) => {
      return (
        <div key={e.id} className="product-card">
          <img src={e.image} width={250} />
          <h1>{e.title}</h1>
          <h3>{e.price}</h3>
          <h3>{e.category}</h3>
        </div>
      );
    });
  }
  return <div className="products">{answer}</div>;
};

export default Products;
