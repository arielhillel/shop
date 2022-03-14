import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import "./Header.css";
const Header = () => {
  return (
    <>
      <div className="header">
        <div className="logo">
          <a href="/">
            <img
              width={75}
              src="https://fakestoreapi.com/icons/logo.png"
              alt="Logo Image"
            />
          </a>
        </div>
        <NavBar />
        <div className="contact">
          <button>Contact</button>
        </div>
      </div>
    </>
  );
};

export default Header;
