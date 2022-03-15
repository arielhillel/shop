import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <ul className="nav-bar-list">
        <li className="nav-bar-link">
          <Link to="/home">Home</Link>
        </li>
        <li className="nav-bar-link">
          <Link to="/products">Products</Link>
        </li>
        <li className="nav-bar-link">
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </>
  );
};

export default NavBar;
