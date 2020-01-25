import React from "react";
import { Link } from "react-router-dom";
import "./header.style.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
const Header = () => {
  return (
    <div className="header">
      <Link to="/crown-clothing" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link to="/crown-clothing/shop" className="option">
          SHOP
        </Link>
        <Link to="/shop" className="option">
          CONTACT
        </Link>
        <Link to="/signin" className="option">
          SIGNIN
        </Link>
      </div>
    </div>
  );
};

export default Header;
