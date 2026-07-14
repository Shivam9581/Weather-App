export interface WeatherData {
  name: string;

  main: {
    temp: number;
    feels_like: number;
    humidity: number;
    pressure: number;
  };

  weather: {
    main: string;
    description: string;
    icon: string;
  }[];

  wind: {
    speed: number;
  };

  visibility: number;

  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
}