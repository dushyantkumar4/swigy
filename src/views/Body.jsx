import React, { useState, useEffect } from "react";
import RestaurantCard, { WithOff } from "../components/RestaurantCard.jsx";

import RestaurantShimmer from "../components/RestaurantShimmer/RestaurantShimmer.jsx";
import useOnlineStatus from "../hooks/useOnlineStatus.js";
import useAllRestaurant from "../hooks/useAllRestaurant.js";
import { NavLink } from "react-router-dom";

const Body = () => {
  const [filterRestaurant, setFilterRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const { listOfRestaurant, loading } = useAllRestaurant();

  const onlineStatus = useOnlineStatus();
  const RestauratOff = WithOff(RestaurantCard);

  useEffect(() => {
    setFilterRestaurant(listOfRestaurant);
  }, [listOfRestaurant]);

  if (loading) return <RestaurantShimmer />;

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you're offline!! Please check your internet connection.
      </h1>
    );

  return (
    <div className="">
      <div className="flex gap-5 p-10 ">
        <div className="flex gap-5">
          <input
            className="border border-green-600 rounded-xl py-1 "
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="cursor-pointer shadow hover:shadow-md py-1 px-3 rounded-xl text-green-600"
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
          className="cursor-pointer shadow hover:shadow-md py-1 px-3 rounded-xl text-green-600"
          onClick={() => {
            const filterList = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4
            );
            setFilterRestaurant(filterList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      {/* all Restaurents  */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-center px-10">
        {filterRestaurant.map((restaurant) => (
          <NavLink
            key={restaurant.info.id}
            to={`/restaurants/${restaurant.info.id}`}
            className=""
          >
            {restaurant?.info?.aggregatedDiscountInfoV3?.header === "ITEMS" ? (
              <RestaurantCard resData={restaurant} />
            ) : (
              <RestauratOff resData={restaurant} />
            )}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Body;
