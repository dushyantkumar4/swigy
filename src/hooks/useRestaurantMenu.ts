import {useEffect,useState} from 'react'
import axios from "axios";
import { baseUrl } from '../utils/constant';

 

const useRestaurantMenu = ({lat=21.17024,lng = 72.831062,resId=74644}) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () =>{
        try {
            const res = await axios.get(
              `${baseUrl}/menu?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}lng=${lng}&submitAction=ENTER&restaurantId=${resId}`
            );
        
            const details = res?.data?.data?.cards;
        
            return details;
          } catch (error) {
            console.error("Error fetching restaurant menu:", error);
            return null;
          }

    }

  return resInfo;
}

export default useRestaurantMenu