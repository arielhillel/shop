import { React, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./containers/Header/Header";
import Footer from "./containers/Footer/Footer";
import Home from "./containers/Home/Home";
import Products from "./containers/Products/Products";
import CartPage from "./containers/CartPage/CartPage";
import Contact from "./containers/Contact/Contact";
import ProductPage from "./components/ProductPage/ProductPage";
import { useDispatch, useSelector } from "react-redux";
import { LoadProducts } from "./reducers/reducerProducts";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  const dispatchNow = useDispatch();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => dispatchNow(LoadProducts(json)));
  }, []);

  let products = useSelector((s) => s.products);

  const addToCart = (itemId) => {
    let x = cart;
    x.push(itemId);
    setCart(x);
  };

  const removebgFromCart = (itemId) => {
    let arr = cart.filter((id) => id !== itemId);
    setCart(arr);
  };

  return (
    <div className="App">
      <Header />
      <Routes>
        {products ? (
          products.map((e) => {
            return (
              <Route
                key={e.id}
                path="/products/:id"
                element={<ProductPage addToCart={addToCart} />}
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
          element={<Products addToCart={addToCart} />}
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
    </div>
  );
}

export default App;
