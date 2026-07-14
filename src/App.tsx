import "./index.css";
import { useEffect, useState } from "react";
import axios from "axios";

import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import WeatherDetails from "./components/WeatherDetails";
import Loader from "./components/Loader";
import RecentSearches from "./components/RecentSearches";

import { getForecast, getWeather, getWeatherByCoordinates, getForecastByCoordinates} from "./services/weatherApi";
import type { WeatherData } from "./types/weather";
import { MapPin } from "lucide-react";
import type { ForecastItem } from "./types/forcast";
import Forecast from "./components/Forecast";

function App() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [forecast, setForecast] = useState<ForecastItem[]>([]);

  // Load recent searches when app starts
  useEffect(() => {
    const searches = localStorage.getItem("recentSearches");

    if (searches) {
      setRecentSearches(JSON.parse(searches));
    }
  }, []);

  // Save recent searches whenever they change
  useEffect(() => {
    localStorage.setItem("recentSearches", JSON.stringify(recentSearches));
  }, [recentSearches]);

  const handleSearch = async (city: string) => {
    try {
      setLoading(true);
      setError("");

      const data = await getWeather(city);
      const forcastData = await getForecast(city);
      setForecast(forcastData.list);

      setWeather(data);

      const updatedSearches = [
        city,
        ...recentSearches.filter(
          (item) => item.toLowerCase() !== city.toLowerCase(),
        ),
      ].slice(0, 5);

      setRecentSearches(updatedSearches);
    } catch (error) {
      setWeather(null);

      if (axios.isAxiosError(error)) {
        if (error.response?.status === 404) {
          setError("City not found.");
        } else {
          setError("Something went wrong.");
        }
      } else {
        setError("Unexpected error.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleCurrentLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported.");
      return;
    }

    setLoading(true);
    setError("");

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;

          const data = await getWeatherByCoordinates(latitude, longitude);
          const forecastData =await getForecastByCoordinates(latitude,longitude);
          setWeather(data);
          setForecast(forecastData.list);
          const city = data.name;

          setRecentSearches((prev) => {
            const updated = [
              city,
              ...prev.filter(
                (item) => item.toLowerCase() !== city.toLowerCase(),
              ),
            ].slice(0, 5);

            return updated;
          });
        } catch {
          setError("Unable to fetch weather.");
        } finally {
          setLoading(false);
        }
      },
      () => {
        setLoading(false);
        setError("Location permission denied.");
      },
    );
  };

  const getBackgroundClass = (weather: WeatherData | null): string => {
    if (!weather) return "default-bg";

    const condition = weather.weather[0].main.toLowerCase();
    const icon = weather.weather[0].icon;

    switch (condition) {
      case "clear":
        return icon.endsWith("n") ? "night-clear-bg" : "clear-bg";

      case "clouds":
        return "clouds-bg";

      case "rain":
      case "drizzle":
        return "rain-bg";

      case "thunderstorm":
        return "storm-bg";

      case "snow":
        return "snow-bg";

      case "mist":
      case "fog":
      case "haze":
        return "mist-bg";

      default:
        return "default-bg";
    }
  };

  return (
    <div className={`app ${getBackgroundClass(weather)}`}>
      <div className="weather-container">
        <h1>Weather App</h1>
        <p>Search any city</p>
        <div className="location-btn-container">
          <button
  className="location-btn"
  onClick={handleCurrentLocation}
>
  <MapPin size={18} />
  <span>Use My Location</span>
</button>
        </div>
        <SearchBar onSearch={handleSearch} />

        <RecentSearches searches={recentSearches} onSearch={handleSearch} />

        {loading && <Loader />}

        {error && <div className="error">{error}</div>}

        {weather && (
          <>
            <WeatherCard weather={weather} />
            <WeatherDetails weather={weather} />
            <Forecast forecast={forecast} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
