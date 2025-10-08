import React from "react";
import { ShimmerPostItem } from "react-shimmer-effects";
import "./RestaurantShimmer.css";

const RestaurantShimmer = () => {
  return (
    <div className="shimmer-container">
      <ShimmerPostItem
        className="shimmer-card"
        style={{ marginTop: "2rem",paddingTop:"2rem" }}
        card
        title
        text
        cta
        imageType="thumbnail"
        imageWidth={200}
        imageHeight={200}
        contentCenter
      />
      <ShimmerPostItem
        card
        title
        text
        cta
        imageType="thumbnail"
        imageWidth={200}
        imageHeight={200}
        contentCenter
        className="shimmer-card"
      />
      <ShimmerPostItem
        card
        title
        text
        cta
        imageType="thumbnail"
        imageWidth={200}
        imageHeight={200}
        contentCenter
        className="shimmer-card"
      />
      <ShimmerPostItem
        card
        title
        text
        cta
        imageType="thumbnail"
        imageWidth={200}
        imageHeight={200}
        contentCenter
        className="shimmer-card"
      />
      <ShimmerPostItem
        card
        title
        text
        cta
        imageType="thumbnail"
        imageWidth={200}
        imageHeight={200}
        contentCenter
        className="shimmer-card"
      />
      <ShimmerPostItem
        card
        title
        text
        cta
        imageType="thumbnail"
        imageWidth={200}
        imageHeight={200}
        contentCenter
        className="shimmer-card"
      />
      <ShimmerPostItem
        card
        title
        text
        cta
        imageType="thumbnail"
        imageWidth={200}
        imageHeight={200}
        contentCenter
        className="shimmer-card"
      />
      <ShimmerPostItem
        card
        title
        text
        cta
        imageType="thumbnail"
        imageWidth={200}
        imageHeight={200}
        contentCenter
        className="shimmer-card"
      />
    </div>
  );
};

export default RestaurantShimmer;
