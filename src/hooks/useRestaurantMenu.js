import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../utils/constant";

const useRestaurantMenu = ({ lat = 21.17024, lng = 72.831062, resId }) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        `${baseUrl}/menu?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}lng=${lng}&submitAction=ENTER&restaurantId=${resId}`
      );

      const details = res?.data?.data?.cards;
      setResInfo(details);

      return details;
    } catch (error) {
      console.error("Error fetching restaurant menu:", error);
      return null;
    }
  };
  return resInfo;
};

export default useRestaurantMenu;
