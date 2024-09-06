import React, { useState } from "react";
import { useWeather } from "@features/weather/contexts/weather-context";

export const TemperatureSlider: React.FC = () => {
  const [temperature, setTemperature] = useState(0);

  const { weatherData, dispatch } = useWeather();

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTemperature(Number(event.target.value));

    const newWeatherData = weatherData.data.filter((weather) => {
      return weather.temp > Number(event.target.value);
    });

    dispatch({
      type: "SET_WEATHER_DATA",
      payload: { weather: newWeatherData },
    });
  };

  return (
    <div>
      <label htmlFor="temperature-slider">Temperature: {temperature}°C</label>
      <input
        type="range"
        id="temperature-slider"
        min="0"
        max="100"
        value={temperature}
        onChange={handleSliderChange}
      />
    </div>
  );
};
