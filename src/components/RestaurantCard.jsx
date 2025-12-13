import React from "react";
import { IMG_URL } from "../utils/constant.js";
import { NavLink } from "react-router-dom";

const RestaurantCard = ({ resData =[]}) => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-center px-10">
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
          <NavLink key={id} to={`/restaurants/${id}`} className="max-w-70 ">
            <div className="transition-all duration-60 hover:p-2">
              <img
                src={IMG_URL + cloudinaryImageId}
                alt={name}
                className="rounded-2xl object-cover w-full h-45 shadow"
              />
              <div className="pl-2">
                <h3 className="text-lg font-bold">{name}</h3>

                <div className="flex gap-2 font-medium">
                  <p className="flex gap-1">
                    <span className="text-green-600">★</span>({avgRating})
                  </p>
                  <p>{sla.deliveryTime} minutes</p>
                </div>
                <p className="text-gray-500">{cuisines.join(" , ")}</p>
                <p>{costForTwo}</p>
              </div>
            </div>
          </NavLink>
        );
      })}
    </div>
  );
};

export default RestaurantCard;
