import React from "react";
import "./menu-item.style.scss";
const MenuItem = ({ section: { title, imageUrl } }) => {
  return (
    <div className="menu-item">
      <div
        className="backgroundImage"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span>SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
