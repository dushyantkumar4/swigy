import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { fetchApiData } from "../utils/api.js";
import RestaurantShimmer from "./RestaurantShimmer/RestaurantShimmer.jsx";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getRestaurants = async () => {
      const data = await fetchApiData();
      setListOfRestaurant(data);
      setLoading(false);
    };
    getRestaurants();
  }, []);

  if (loading) return <RestaurantShimmer />;
  
  return (
    <div className="body">
      <div className="search">
        <button
          className="filter-btn"
          onClick={() => {
            const filterList = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurant(filterList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        <RestaurantCard resData={listOfRestaurant} />
      </div>
    </div>
  );
};

export default Body;
