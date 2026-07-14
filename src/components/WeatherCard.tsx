import type { WeatherData } from "../types/weather";
type weathercardprops = {
  weather: WeatherData;
};

function WeatherCard({ weather }: weathercardprops) {
  const today = new Date();

  const day = today.toLocaleDateString("en-US", {
    weekday: "long",
  });

  const date = today.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (
    <div className="weather-card">
      <div className="date-container">
        <h4>{day}</h4>
        <p>{date}</p>
      </div>
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
        alt={weather.weather[0].description}
      />

      <h1>{Math.round(weather.main.temp)}°C</h1>
      <h2>{weather.weather[0].main}</h2>

      <p>{weather.weather[0].description}</p>

      <h3>
        {weather.name}, {weather.sys.country}
      </h3>
    </div>
  );
}

export default WeatherCard;
