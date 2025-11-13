import axios from "axios";
const lat = 28.7040592;
const lng = 77.10249019999999;

const proxyUrl = "https://api.codetabs.com/v1/proxy?quest=";

// Base url for the all restaurant
const baseUrl = `https://www.swiggy.com/dapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=${lat}&lng=${lng}&carousel=true&third_party_vendor=1`;

// fetching the data for the all restaurant
export const fetchApiData = async () => {
  try {
    const res = await axios.get(`${proxyUrl}${encodeURIComponent(baseUrl)}`, {
      headers: {
        Accept: "application/json",
      },
    });

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

export const singleRestaurantApi = async (restaurantId = "10208") => {
  try {
    // Single restaurant URL
    const restaurantBaseUrl = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lng}&restaurantId=${restaurantId}&catalog_qa=undefined&submitAction=ENTER`;

    // Use the proxy to bypass CORS
    const res = await axios.get(
      `${proxyUrl}${encodeURIComponent(restaurantBaseUrl)}`
    );

    console.log(res.data);

    let parsedData;
    try {
      parsedData = typeof res.data === "string" ? JSON.parse(res.data) : res.data;
    } catch (err) {
      console.warn(" Could not parse JSON, raw data:", res.data);
      parsedData = null;
    }

    console.log(" Restaurant Data:", parsedData);
    return res;
  } catch (error) {
    console.error("Error fetching restaurant menu:", error.message);
    return null;
  }
};
