import React from "react";
import { withRouter } from "react-router";
import "./menu-item.style.scss";
const MenuItem = ({ title, imageUrl, linkUrl, history, match }) => {
  return (
    <div
      className="menu-item"
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
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

export default withRouter(MenuItem);
