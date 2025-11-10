import React, { useEffect, useState } from "react";
import { singleRestaurantApi } from "../utils/api";
import { ShimmerPostItem, ShimmerCategoryItem } from "react-shimmer-effects";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    const fetchRestaurent = async () => {
      try {
        const data = await singleRestaurantApi("10208");
        console.log(data.data.cards[5].groupedCard.cardGroupMap.REGULAR.cards);
        setResInfo(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchRestaurent();
  }, []);

const {name,cuisines,costForTwoMessage} = resInfo?.data?.cards[2]?.card?.card?.info || {};
const itemCards = resInfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards || {}
console.log(itemCards);

  return resInfo === null ? (
    <ShimmerCategoryItem
      hasImage
      imageType="thumbnail"
      imageWidth={100}
      imageHeight={100}
      title
      text
      cta
      contentCenter
    />
  ) : (
    <div>
      <h1>{name}</h1>
      <h2>{cuisines.join(",")} - {costForTwoMessage}</h2>
      <h3>. </h3>
      <ul>
        <li>Burgur</li>
        <li>samosa</li>
        <li>chatani</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
