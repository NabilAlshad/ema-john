import React from "react";
import "./Header.css";
import logo from "../../images/logo.png";
import Navbar from "../navbar/Navbar";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="" />
      <Navbar></Navbar>
    </div>
  );
};

export default Header;
