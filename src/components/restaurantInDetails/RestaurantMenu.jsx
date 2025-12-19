import React, { useState } from "react";
import { IMG_URL } from "../../utils/constant";
import { ShimmerCategoryItem } from "react-shimmer-effects";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../hooks/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const [openCategoryId, setOpenCategoryId] = useState(null);
  const resId = useParams();
  const resInfo = useRestaurantMenu(resId);

  const toggleCategory = (id) => {
    setOpenCategoryId((prev) => (prev === id ? null : id));
  };

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

  let categories = [];

  regularCards.forEach((entry) => {
    const inner = entry?.card?.card;
    if (!inner) return;

    // CASE 1: ItemCategory (direct itemCards)
    if (
      inner["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) {
      categories.push({
        categoryId: inner.categoryId,
        title: inner.title,
        itemCards: inner.itemCards || [],
      });
    }

    // CASE 2: NestedItemCategory (categories inside)
    if (
      inner["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    ) {
      inner.categories?.forEach((cat) => {
        categories.push({
          categoryId: cat.categoryId,
          title: cat.title,
          itemCards: cat.itemCards || [],
        });
      });
    }
  });

  return (
    <div className="flex flex-col gap-5 px-10 sm:px-20 md:px-30  lg:px-50 mt-10">
      {/* main restaurat header  */}
      <div className="flex flex-col sm:flex-col lg:flex-row items-center gap-10 border border-gray-300 p-5 rounded-2xl shadow-lg">
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

      {/* all dishes  */}
      <div className="px-1">
        {categories.map((cat) => (
          <RestaurantCategory
            key={cat.categoryId}
            data={cat}
            isOpen={openCategoryId === cat.categoryId}
            onToggle={() => toggleCategory(cat.categoryId)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
