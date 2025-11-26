import React from "react";
import { IMG_URL } from "../utils/constant.js";
import { NavLink } from "react-router-dom";

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
          <NavLink key={id} to={`/restaurants/${id}`}>
            <div className="res-card">
              <img
                src={IMG_URL + cloudinaryImageId}
                alt="res-logo"
                className="res-logo"
              />
              <h3>{name}</h3>
              <h4>{cuisines.join(" , ")}</h4>
              <h4>{avgRating} ★</h4>
              <h4>{costForTwo}</h4>
              <h4>{sla.deliveryTime} minutes</h4>
            </div>
          </NavLink>
        );
      })}
    </div>
  );
};

export default RestaurantCard;
