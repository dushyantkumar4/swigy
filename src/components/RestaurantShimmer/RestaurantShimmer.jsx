import React from "react";
import { ShimmerPostItem } from "react-shimmer-effects";
import "./RestaurantShimmer.css";
const count = 8;

const RestaurantShimmer = () => {
  return (
    <div className="shimmer-container">
      {Array.from({ length: count }).map((_, index) => (
        <ShimmerPostItem
          className="shimmer-card"
          style={{ marginTop: "2rem", paddingTop: "2rem" }}
          card
          title
          text
          cta
          imageType="thumbnail"
          imageWidth={200}
          imageHeight={200}
          contentCenter
        />
      ))}
    </div>
  );
};

export default RestaurantShimmer;
