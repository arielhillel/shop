import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Logo from "../../components/Logo/Logo";
import ContactBtn from "../../components/ContactBtn/ContactBtn";
import "./Header.css";
const Header = () => {
  return (
    <>
      <div className="header">
        <Logo />
        <NavBar />
        <ContactBtn />
      </div>
    </>
  );
};

export default Header;
