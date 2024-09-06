import React, { createContext, useContext, useReducer, ReactNode } from "react";

interface Weather {
  name: string;
  temp: number;
  speed: number;
}

type WeatherAction =
  | {
      type: "SET_WEATHER_DATA";
      payload: { weather: Weather[] };
    }
  | { type: "CLEAR_WEATHER_DATA" }
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "SET_ERROR"; payload: string | null };

interface WeatherContextProps {
  weatherData: { data: Weather[]; loading: boolean; error: string | null };
  dispatch: React.Dispatch<WeatherAction>;
}

const WeatherContext = createContext<WeatherContextProps | undefined>(
  undefined
);

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const weatherReducer = (
  state: { data: Weather[]; loading: boolean; error: string | null },
  action: WeatherAction
): { data: Weather[]; loading: boolean; error: string | null } => {
  switch (action.type) {
    case "SET_WEATHER_DATA":
      return { data: action.payload.weather, loading: false, error: null };
    case "CLEAR_WEATHER_DATA":
      return { data: [], loading: false, error: null };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export const WeatherProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [weatherData, dispatch] = useReducer(weatherReducer, initialState);

  return (
    <WeatherContext.Provider value={{ weatherData, dispatch }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = (): WeatherContextProps => {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error("useWeather must be used within a WeatherProvider");
  }
  return context;
};
