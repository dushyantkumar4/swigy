import React from "react";
import { IMG_URL } from "../../utils/constant";

const RestaurantMenuCard = ({
  dishName,
  price,
  rating = 1,
  ratingCountV2 = 0,
  imageId,
  description,
}) => {
  return (
    <div className="flex justify-between w-full px-1 border-b border-gray-300 pb-5">
      <div className="flex flex-col justify-between ">
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold">{dishName}</h3>
          <span className="flex gap-5">
            <p>₹ {price / 100}</p>
            <p className="text-green-700">
              ★ {rating} ({ratingCountV2})
            </p>
          </span>
        </div>
        <p className="text-gray-500 w-70">{description}</p>
      </div>
      <div className="flex flex-col justify-between items-center gap-1">
        <div className="border-none rounded-2xl overflow-hidden object-fit size-20 md:size-30 lg:size-40 ">
          <img
            src={IMG_URL + imageId}
            alt={dishName}
            className="w-full h-full"
          />
        </div>
        <button className=" text-green-600 sm:font-semibold md:font-bold border border-gray-300 text-center w-auto px-10 py-2 shadow-lg rounded-lg">
          ADD
        </button>
      </div>
    </div>
  );
};

export default RestaurantMenuCard;
