import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { fetchApiData } from "../utils/api.js";
import RestaurantShimmer from "./RestaurantShimmer/RestaurantShimmer.jsx";

const Body = () => {  
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  // while seraching can serch from all
  const [filterRestaurant, setFilterRestaurant] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const getRestaurants = async () => {
      const data = await fetchApiData();
      setListOfRestaurant(data);
      setFilterRestaurant(data);
      setLoading(false);
    };
    getRestaurants();
  }, []);

  if (loading) return <RestaurantShimmer />;

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            className="serch-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filterdRestaurent = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilterRestaurant(filterdRestaurent);
            }}
          >
            Search
          </button>
        </div>
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
        <RestaurantCard resData={filterRestaurant} />
      </div>
    </div>
  );
};

export default Body;
