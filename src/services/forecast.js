import Config from "../config";

//openweather api lets you forecast for 5 days only, since calendar supports every month forecast will not be available for most of the days thats why decided to forecast by city name only omitting time and give a better ux

export const fetchForecastByCityName = async (city) => {
  const res = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${Config.OPEN_WEATHER_API_KEY}`
  );
  const {
    weather,
    main: { temp, feels_like, temp_min, temp_max },
  } = await res.json();

  return {
    skies: weather[0].description,
    minTemp: convertKelvinToCelsius(temp_min),
    maxTemp: convertKelvinToCelsius(temp_max),
    temp: convertKelvinToCelsius(temp),
    feelsLike: convertKelvinToCelsius(feels_like),
  };
};

export const convertKelvinToCelsius = (kelvin) => {
  const celsius = kelvin - 273.15;
  return `${Math.round(celsius)}°C`;
};
