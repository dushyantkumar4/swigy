import React, { useEffect, useState } from "react";
import { IMG_URL } from "../../utils/constant";
import { singleRestaurantApi } from "../../utils/api";
import { ShimmerCategoryItem } from "react-shimmer-effects";
import "./restaurantMenu.css";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    const getRestaurantsDetails = async () => {
      const data = await singleRestaurantApi();
      setResInfo(data);
    };
    getRestaurantsDetails();
  }, []);

  // simmer effect
  if (resInfo === null) {
    return (
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
    );
  }
  // for the first card
  const restaurantDetails = resInfo.find((c) => c.card?.card?.info)?.card.card
    .info;

  // for the all products
  const regularCards =
    resInfo?.find((c) => c.groupedCard)?.groupedCard?.cardGroupMap?.REGULAR
      ?.cards || [];

  let allItemCards = [];

  regularCards.forEach((entry) => {
    const inner = entry?.card?.card;
    if (!inner) return;

    // CASE 1: ItemCategory (direct itemCards)
    if (
      inner["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) {
      if (inner.itemCards?.length) {
        inner.itemCards.forEach((item) => {
          allItemCards.push(item.card.info);
        });
      }
    }

    // CASE 2: NestedItemCategory (categories inside)
    if (
      inner["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    ) {
      inner.categories?.forEach((cat) => {
        cat.itemCards?.forEach((item) => {
          allItemCards.push(item.card.info);
        });
      });
    }
  });
  console.log(allItemCards);

  const {
    name,
    cuisines,
    avgRating,
    costForTwoMessage,
    totalRatingsString,
    cloudinaryImageId,
    sla,
  } = restaurantDetails || {};

  return (
    <div>
      <div>
        <img src={IMG_URL + cloudinaryImageId} alt="" />
        <h1>{name}</h1>

        <h3>
          ★ {avgRating} ({totalRatingsString}) - {costForTwoMessage}
        </h3>
        <p>{cuisines.join(", ")}</p>
        <p>{sla.slaString}</p>
      </div>

      {allItemCards.map((item) => {
        const { name: dishName, imageId, price, description,ratings } = item;
        const {rating,ratingCountV2} = ratings?.aggregatedRating || {};
        return (
          <div className="rest_menu_dish">
            <div>
              <div>
                <h3>{dishName}</h3>
                <p>₹ {price / 100}</p>
                <p> ★ {rating } ({ratingCountV2})</p>
              </div>
              <img src={IMG_URL + imageId} alt="" />
            </div>
            <div>
              <p>{description}</p>
              <button className="dish_btn"> ADD + </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
