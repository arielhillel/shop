import { React, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./containers/Header/Header";
import Footer from "./containers/Footer/Footer";
import Home from "./containers/Home/Home";
import Products from "./containers/Products/Products";
import Cart from "./containers/Cart/Cart";
import Contact from "./containers/Contact/Contact";
import ProductPage from "./components/ProductPage/ProductPage";
import "./App.css";

function App() {
  const [products, setProducts] = useState();
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <>
      <Header />
      <Routes>
        {products ? (
          products.map((e) => {
            return (
              <Route
                key={e.id}
                path="/products/:id"
                element={<ProductPage products={products} />}
              ></Route>
            );
          })
        ) : (
          <></>
        )}
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route
          path="/products"
          element={<Products products={products} />}
        ></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
