import React from "react";
import { SearchBar } from "@features/weather/components/search-bar/search-bar";
import { useWeather } from "@features/weather/contexts/weather-context";
import { CityList } from "@features/weather/components/city-list/city-list";
import { TemperatureSlider } from "@features/weather/components/temperature-slider/temperature-slider";
import { Loading } from "@shared/components/loading/loading";
import { Error } from "@shared/components/error/error";

const WeatherPage: React.FC = () => {
  const {
    weatherData: { loading, error },
  } = useWeather();
  return (
    <div className="city-card">
      <SearchBar />
      {loading ? (
        <Loading />
      ) : (
        <>
          <TemperatureSlider />
          <CityList />
        </>
      )}
      {error && <Error message={error} />}
    </div>
  );
};

export default WeatherPage;
