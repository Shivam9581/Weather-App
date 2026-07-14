export interface ForecastItem {
  dt: number;

  dt_txt: string;

  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
  };

  weather: {
    main: string;
    description: string;
    icon: string;
  }[];
}

export interface ForecastResponse {
  list: ForecastItem[];
}

export interface DailyForecast {
  date: string;
  day: string;

  minTemp: number;
  maxTemp: number;

  icon: string;
  description: string;
}