import Config from "../config";

//openweather api only lets forecast for 5 days, since calendar supports every month forecast will not be available for most of the days thats why decided to forecast by city name only omitting time
export const fetchForecastByCityName = async (city) => {
  const res = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${Config.OPEN_WEATHER_API_KEY}`
  );
  const j = await res.json();
  console.log(j);
};
