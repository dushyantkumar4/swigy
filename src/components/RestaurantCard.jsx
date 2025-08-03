import React from "react";
import { CDN_URL } from "../utils/constant";
const RestaurantCard = ({ resData }) => {
  return (
    <div className="res-card-container">
      {resData.map((restaurant) => {
        const {
          name,
          cloudinaryImageId,
          cuisines,
          avgRating,
          costForTwo,
          sla,
          id,
        } = restaurant.info;
        return (
          <div className="res-card" key={id}>
            <img
              src={CDN_URL + cloudinaryImageId}
              alt="res-logo"
              className="res-logo"
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(" , ")}</h4>
            <h4>{avgRating} ★</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime} minutes</h4>
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantCard;
