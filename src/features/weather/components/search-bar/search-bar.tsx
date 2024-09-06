import React, { useState } from "react";
import { fetchCityWeatherByName } from "@features/weather/services/weather";
import { useWeather } from "@features/weather/contexts/weather-context";

export const SearchBar: React.FC = () => {
  const [city, setCity] = useState("");
  const { dispatch } = useWeather();

  const handleSearch = async () => {
    dispatch({ type: "SET_LOADING", payload: true });

    const { data, success, error } = await fetchCityWeatherByName(city);

    if (success && data) {
      const { name, main, wind } = data;
      const { temp } = main;
      const { speed } = wind;

      dispatch({
        type: "SET_WEATHER_DATA",
        payload: { weather: [{ name, temp, speed }] },
      });
    } else {
      dispatch({ type: "SET_ERROR", payload: error || "An error occurred" });
    }
  };

  const handleChangeCity = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={city}
        onChange={handleChangeCity}
        placeholder="Search for a city"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};
