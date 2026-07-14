import axios from "axios";
import type { WeatherData } from "../types/weather";
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export const getWeather = async (city: string) : Promise<WeatherData> => {
  const response = await axios.get(BASE_URL, {
    params: {
      q: city,
      appid: API_KEY,
      units: "metric",
    },
  });

  return response.data;
};


export const getWeatherByCoordinates = async (
  lat: number,
  lon: number
): Promise<WeatherData> => {
  const response = await axios.get(BASE_URL, {
    params: {
      lat,
      lon,
      appid: API_KEY,
      units: "metric",
    },
  });

  return response.data;
};


export const getForecast = async (
  city: string
) => {
  const response = await axios.get(
    "https://api.openweathermap.org/data/2.5/forecast",
    {
      params: {
        q: city,
        appid: API_KEY,
        units: "metric",
      },
    }
  );

  return response.data;
};



export const getForecastByCoordinates = async (
  lat: number,
  lon: number
) => {
  const response = await axios.get(
    "https://api.openweathermap.org/data/2.5/forecast",
    {
      params: {
        lat,
        lon,
        appid: API_KEY,
        units: "metric",
      },
    }
  );

  return response.data;
};