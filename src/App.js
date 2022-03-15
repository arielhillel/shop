import { React, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./containers/Header/Header";
import Footer from "./containers/Footer/Footer";
import Home from "./containers/Home/Home";
import Products from "./containers/Products/Products";
import CartPage from "./containers/CartPage/CartPage";
import Contact from "./containers/Contact/Contact";
import ProductPage from "./components/ProductPage/ProductPage";
import "./App.css";

function App() {
  const [products, setProducts] = useState();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  const addToCart = (itemId) => {
    console.log(itemId);
    let x = cart;
    x.push(itemId);
    setCart(x);
    console.log(cart);
  };

  const removebgFromCart = (itemId) => {
    let arr = cart.filter((id) => id !== itemId);
    console.log(arr);
    setCart(arr);
  };

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
                element={
                  <ProductPage addToCart={addToCart} products={products} />
                }
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
          element={<Products addToCart={addToCart} products={products} />}
        ></Route>
        <Route
          path="/cart"
          element={
            <CartPage
              addToCart={addToCart}
              removebgFromCart={removebgFromCart}
              cart={cart}
            />
          }
        ></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
