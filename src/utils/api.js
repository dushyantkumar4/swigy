import axios from "axios";
const api_url =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6139&lng=77.2090&page_type=DESKTOP_WEB_LISTING";

export const fetchApiData = async () => {
  try {
    await axios.get(api_url);
  } catch (err) {
    console.log(err.message);
  }
};
