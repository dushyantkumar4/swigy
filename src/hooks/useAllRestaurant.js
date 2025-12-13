import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../utils/constant";


const useAllRestaurant = ({ lat = 21.17024, lng = 72.831062 }={}) => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchApiData();
  }, [lat,lng]);

  const fetchApiData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `${baseUrl}/restaurants?lat=${lat}&lng=${lng}&page_type=DESKTOP_WEB_LISTING`
      );

      const restaurants =
        res.data?.data?.cards?.find(
          (c) => c.card?.card?.gridElements?.infoWithStyle?.restaurants
        )?.card.card.gridElements.infoWithStyle.restaurants || [];
        
      setListOfRestaurant(restaurants);
        console.log(restaurants)
      return restaurants;
    } catch (error) {
      console.error("Error fetching restaurants:", error.message);
      return [];
    }finally {
        setLoading(false);
      }
  };
  return { listOfRestaurant, loading };
};

export default useAllRestaurant;
