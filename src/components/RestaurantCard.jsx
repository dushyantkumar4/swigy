import React,{useContext} from "react";
import { IMG_URL } from "../utils/constant.js";
import { NavLink } from "react-router-dom";
import UserContext from "../utils/UserContext.js";


const RestaurantCard = ({ resData }) => {
  const {loggedUser} = useContext(UserContext);
  const { name, cloudinaryImageId, cuisines, avgRating, costForTwo, sla } =
    resData.info;

  return (
    <div className="">
      <div className="transition-all duration-60 hover:p-2 max-w-70">
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
        <p>{loggedUser}</p>
      </div>
    </div>
  );
};

export const WithOff = (WrappedComponent) => {
  return (props) => (
    <div className="relative ">
      <label className="absolute font-medium text-white text-xl shadow-xl bg-green-500 rounded-xl px-3  ">{props?.resData?.info?.aggregatedDiscountInfoV3?.header}</label>
      <WrappedComponent {...props} />
    </div>
  );
};

export default RestaurantCard;
