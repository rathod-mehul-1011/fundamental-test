import React, { Fragment, useState } from "react";
import Like from "../../assets/images/heart.png";
import Dislike from "../../assets/images/love.png";

import "./ItemCard.css";

const ItemCard = (props) => {
  const item = props.item;

  return (
    <div className="d-flex align-items-center new-item-card">
      <div
        className="d-flex justify-content-between align-items-center item-card"
        data-bs-toggle={props.databstoggle}
        data-bs-target={props.databstarget}
      >
        <img src={item.imageURL} className="item-image" alt="" />
        <div className="me-auto ms-2">
          <h3 className="item-title">{item.title}</h3>
          <p className="item-desc">
            {item.description}
          </p>
        </div>
      </div>
      <div className="item-icon-pos">
      <img
          src={item.isFavorite ? Like : Dislike}
          className="item-icon"
          onClick={props.toggleFavorite}
          alt=""
        />
      </div>
    </div>
  );
};

export default ItemCard;
