import axios from "axios";

const baseUrl = "https://www.swiggy.com/dapi/restaurants/list/v5";
const lat = 28.6139;
const lng = 77.209;

export const fetchApiData = async () => {
  try {
    const url = `${baseUrl}?lat=${lat}&lng=${lng}&page_type=DESKTOP_WEB_LISTING`;
    const res = await axios.get(url);

    // extract restaurants safely
    const restaurants =
      res.data?.data?.cards?.find(
        (c) => c.card?.card?.gridElements?.infoWithStyle?.restaurants
      )?.card.card.gridElements.infoWithStyle.restaurants || [];

    return restaurants; // return array of restaurants
  } catch (error) {
    console.error("Error fetching restaurants:", error.message);
    return []; // fallback empty array
  }
};
