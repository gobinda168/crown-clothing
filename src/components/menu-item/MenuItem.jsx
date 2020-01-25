import React from "react";
import "./menu-item.style.scss";
const MenuItem = () => {
  return (
    <>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">HATS</h1>
          <span>SHOP NOW</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">JACKET</h1>
          <span>SHOP NOW</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">SNEAKERS</h1>
          <span>SHOP NOW</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">WOMEN</h1>
          <span>SHOP NOW</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">MEN</h1>
          <span>SHOP NOW</span>
        </div>
      </div>
    </>
  );
};

export default MenuItem;
