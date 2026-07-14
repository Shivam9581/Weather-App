import {
  Droplets,
  Wind,
  Eye,
  Thermometer,
  Sunrise,
  Sunset,
  Gauge,
} from "lucide-react";

import type { WeatherData } from "../types/weather";

type WeatherDetailsProps = {
  weather: WeatherData;
};

function WeatherDetails({ weather }: WeatherDetailsProps) {
  const sunrise = new Date(weather.sys.sunrise * 1000).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const sunset = new Date(weather.sys.sunset * 1000).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <div className="details-grid">
      <div className="detail-card">
        <Droplets size={28} />
        <h4>Humidity</h4>
        <p>{weather.main.humidity}%</p>
      </div>

      <div className="detail-card">
        <Wind size={28} />
        <h4>Wind</h4>
        <p>{weather.wind.speed} m/s</p>
      </div>

      <div className="detail-card">
        <Thermometer size={28} />
        <h4>Feels Like</h4>
        <p>{Math.round(weather.main.feels_like)}°C</p>
      </div>

      <div className="detail-card">
        <Eye size={28} />
        <h4>Visibility</h4>
        <p>{weather.visibility / 1000} km</p>
      </div>

      <div className="detail-card">
        <Sunrise size={28} />

        <h4>Sunrise</h4>

        <p>{sunrise}</p>
      </div>

      <div className="detail-card">
        <Sunset size={28} />

        <h4>Sunset</h4>

        <p>{sunset}</p>
      </div>

      <div className="detail-card">
        <Gauge size={28} />

        <h4>Pressure</h4>

        <p>{weather.main.pressure} hPa</p>
      </div>
    </div>
  );
}

export default WeatherDetails;
