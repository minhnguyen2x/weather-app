import "./App.css";
import WeatherPage from "@pages/weather/index";
import { WeatherProvider } from "@features/weather/contexts/weather-context";

function App() {
  return (
    <>
      <WeatherProvider>
        <WeatherPage />
      </WeatherProvider>
    </>
  );
}

export default App;
