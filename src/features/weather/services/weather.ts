import { HOST_API, HOST_API_KEY } from "@shared/constants/api";

type WeatherData = {
  name: string;
  main: {
    temp: number;
  };
  wind: {
    speed: number;
  };
};

interface ErrorResponse {
  cod: string;
  message: string;
}

export const fetchCityWeatherByName = async (cityName: string) => {
  try {
    const response = await fetch(
      `${HOST_API}?q=${cityName}&appid=${HOST_API_KEY}&units=metric`
    );

    if (!response.ok) {
      const errorData: ErrorResponse = await response.json();
      throw new Error(`Error: ${errorData.cod} ${errorData.message}`);
    }

    const data: WeatherData = await response.json();

    return {
      success: true,
      data,
    };
  } catch (error) {
    return {
      success: false,
      error: (error as Error).message,
    };
  }
};
