import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { resData } from "../utils/data.js";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState(resData);
  return (
    <div className="body">
      <div className="search">
        <button className="filter-btn" onClick={()=>{
          const filterList= listOfRestaurant.filter((res)=>res.info.avgRating > 4);
          setListOfRestaurant(filterList);
        }}
        >Top Rated Restaurants</button>
      </div>
      <div className="res-container">
        <RestaurantCard resData={listOfRestaurant} />
      </div>
    </div>
  );
};

export default Body;
