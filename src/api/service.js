import { get_api } from "./axios";

export const weatherAPI = (lat, lon) => {
  let response = get_api(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=251a8729c84d3dcf297f4e26f3c7d469`
  );
  return response;
};
