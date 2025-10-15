import axios from "axios";

const baseUrl = `/swiggy/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true`;

const lat = 28.7040592;
const lng = 77.10249019999999;

export const fetchApiData = async () => {
  try {
    const url = `${baseUrl}&lat=${lat}&lng=${lng}&carousel=true&third_party_vendor=1`;
    const res = await axios.get(url);

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
