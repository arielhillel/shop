import React from "react";
import "./Logo.css";

const Logo = () => {
  return (
    <>
      <div className="logo">
        <a href="/">
          <img
            width={75}
            src="https://fakestoreapi.com/icons/logo.png"
            alt="Logo Image"
          />
        </a>
      </div>
    </>
  );
};

export default Logo;
