import React, { useState, useEffect } from "react";
import RestaurantCard from "../components/RestaurantCard.jsx";
import { fetchApiData } from "../utils/api.js";
import RestaurantShimmer from "../components/RestaurantShimmer/RestaurantShimmer.jsx";
import useOnlineStatus from "../hooks/useOnlineStatus.js";

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

const onlineStatus = useOnlineStatus();
if(onlineStatus===false) return <h1>Looks like you're offline!! Please check your internet connection.</h1>

  if (loading) return <RestaurantShimmer />;

  return (
    <div className="">
      <div className="flex gap-5 p-10">
        <div className="flex gap-5">
          <input
            className="border border-green-600 rounded-xl py-1"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button className="cursor-pointer shadow py-1 px-3 rounded-xl text-green-600"
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
          className="cursor-pointer shadow py-1 px-3 rounded-xl text-green-600"
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
      {/* all Restaurents  */}
      <div className="res-container">
        <RestaurantCard resData={filterRestaurant} />
      </div>
    </div>
  );
};

export default Body;
