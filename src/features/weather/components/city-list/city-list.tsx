import React from "react";
import { CityCard } from "@features/weather/components/city-card/city-card";
import { useWeather } from "@features/weather/contexts/weather-context";

export const CityList: React.FC = () => {
  const {
    weatherData: { data },
  } = useWeather();

  return (
    <div>
      {data.map((city) => (
        <CityCard
          key={city.name}
          cityName={city.name}
          temperature={city.temp}
          windSpeed={city.speed}
        />
      ))}
    </div>
  );
};
