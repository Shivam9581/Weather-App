import type {
  ForecastItem,
  DailyForecast,
} from "../types/forcast";

type ForecastProps = {
  forecast: ForecastItem[];
};

function Forecast({ forecast }: ForecastProps) {
  const groupedForecast: Record<string, ForecastItem[]> = {};

  forecast.forEach((item) => {
    const date = item.dt_txt.split(" ")[0];

    if (!groupedForecast[date]) {
      groupedForecast[date] = [];
    }

    groupedForecast[date].push(item);
  });

  const dailyForecast: DailyForecast[] = Object.keys(groupedForecast)
    .slice(0, 5)
    .map((date) => {
      const dayForecast = groupedForecast[date];

      const minTemp = Math.min(
        ...dayForecast.map((item) => item.main.temp_min)
      );

      const maxTemp = Math.max(
        ...dayForecast.map((item) => item.main.temp_max)
      );

      const middleForecast =
        dayForecast[Math.floor(dayForecast.length / 2)];

      return {
        date,

        day: new Date(date).toLocaleDateString("en-US", {
          weekday: "short",
        }),

        minTemp,

        maxTemp,

        icon: middleForecast.weather[0].icon,

        description: middleForecast.weather[0].main,
      };
    });

  return (
    <div className="forecast">

      <h2>5-Day Forecast</h2>

      <div className="forecast-container">

        {dailyForecast.map((day) => (
          <div
            className="forecast-card"
            key={day.date}
          >

            <h3>{day.day}</h3>

            <img
              src={`https://openweathermap.org/img/wn/${day.icon}@2x.png`}
              alt={day.description}
            />

            <p className="forecast-desc">
              {day.description}
            </p>

            <h4>
              {Math.round(day.maxTemp)}°
              /
              {Math.round(day.minTemp)}°
            </h4>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Forecast;