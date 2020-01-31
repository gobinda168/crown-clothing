import React from "react";
import { Link } from "react-router-dom";
import "./header.style.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
const Header = ({ currentUser }) => {
  return (
    <div className="header">
      <Link to="/crown-clothing" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          SHOP
        </Link>
        <Link to="/shop" className="option">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            {currentUser.displayName.toUpperCase()}, SIGN OUT
          </div>
        ) : (
          <Link to="/signin" className="option">
            SIGNIN
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
