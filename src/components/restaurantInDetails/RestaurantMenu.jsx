import React from "react";
import { IMG_URL } from "../../utils/constant";
import { ShimmerCategoryItem } from "react-shimmer-effects";
import RestaurantMenuCard from "./RestaurantMenuCard";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../hooks/useRestaurantMenu";


const RestaurantMenu = () => {
  const resId = useParams();
  
  const resInfo= useRestaurantMenu(resId);

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
  // destructure first card in details
  const {
    name,
    cuisines,
    avgRating,
    costForTwoMessage,
    totalRatingsString,
    cloudinaryImageId,
    sla,
  } = restaurantDetails || {};

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

  // Remove duplicates based on unique "id"
  const uniqueCards = allItemCards.filter(
    (item, index, self) => index === self.findIndex((t) => t.id === item.id)
  );

  return (
    <div className="flex flex-col gap-5 px-10 sm:px-20 md:px-30  lg:px-50 mt-10">
      <div className="flex items-center gap-10 border border-gray-300 p-5 rounded-2xl shadow-lg">
        <img
          src={IMG_URL + cloudinaryImageId}
          alt=""
          className="size-40 rounded-2xl object-fit"
        />
        <div>
          <h1 className="text-2xl font-bold">{name}</h1>
          <p>
            ★ {avgRating} ({totalRatingsString}) - {costForTwoMessage}
          </p>
          <p>{cuisines.join(", ")}</p>
          <p>{sla.slaString}</p>
        </div>
      </div>

      {uniqueCards.map((item) => {
        const {
          name: dishName,
          imageId,
          price,
          description,
          ratings,
          id,
        } = item;
        const { rating, ratingCountV2 } = ratings?.aggregatedRating || {};

        return (
          <div key={id} className="flex flex-col items-center">
            <RestaurantMenuCard
              dishName={dishName}
              price={price}
              rating={rating}
              ratingCountV2={ratingCountV2}
              imageId={imageId}
              description={description}
            />
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
