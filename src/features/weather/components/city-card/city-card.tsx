import React from "react";
import { useWeather } from "@features/weather/contexts/weather-context";

interface CityCardProps {
  cityName: string;
  temperature: number;
  windSpeed: number;
}

export const CityCard: React.FC<CityCardProps> = ({
  cityName,
  temperature,
  windSpeed,
}) => {
  const { weatherData, dispatch } = useWeather();

  const handleDeleteData = () => {
    const newWeatherData = weatherData.data.filter(
      (city) => city.name !== cityName
    );

    dispatch({
      type: "SET_WEATHER_DATA",
      payload: { weather: newWeatherData },
    });
  };

  return (
    <div>
      <div>
        <h2>
          {cityName}, {temperature}°С
        </h2>
        <p>{windSpeed} м/с</p>
      </div>
      <div>
        <button onClick={handleDeleteData}>delete</button>
      </div>
    </div>
  );
};
