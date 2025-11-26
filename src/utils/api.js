import axios from "axios";
const lat = 21.17024;
const lng = 72.831062;
import { baseUrl } from "./constant";


// fetching the data for the all restaurant
export const fetchApiData = async () => {
  try {
    const res = await axios.get(
      `${baseUrl}/restaurants?lat=${lat}&lng=${lng}&page_type=DESKTOP_WEB_LISTING`
    );

    const restaurants =
      res.data?.data?.cards?.find(
        (c) => c.card?.card?.gridElements?.infoWithStyle?.restaurants
      )?.card.card.gridElements.infoWithStyle.restaurants || [];
    return restaurants;
  } catch (error) {
    console.error("Error fetching restaurants:", error.message);
    return [];
  }
};

// fetching the single restaturen details
export const singleRestaurantApi = async ({resId}) => {
  try {
    const res = await axios.get(
      `${baseUrl}/menu?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}lng=${lng}&submitAction=ENTER&restaurantId=${resId}`
    );

    const details = res?.data?.data?.cards;

    return details;
  } catch (error) {
    console.error("Error fetching restaurant menu:", error.message);
    return null;
  }
};
