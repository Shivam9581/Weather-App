# 🌤️ Weather App

A modern and responsive Weather Application built using **React**, **TypeScript**, and **Vite**. It allows users to search for weather information by city or use their current location to get real-time weather updates.

## 🚀 Live Demo

🔗 https://your-vercel-link.vercel.app

---

## ✨ Features

- 🔍 Search weather by city
- 📍 Get weather using current location
- 🌡️ Real-time temperature
- ☁️ Weather condition with icons
- 💧 Humidity
- 💨 Wind Speed
- 👁️ Visibility
- 🌅 Sunrise & 🌇 Sunset timings
- 📈 Atmospheric Pressure
- 📅 Current day and date
- 🌈 Dynamic background based on weather conditions
- 📜 Recent searches using Local Storage
- ⏳ Loading spinner
- ❌ Error handling for invalid cities
- 📱 Responsive design
- 🌤️ 5-Day Weather Forecast

---

## 🛠️ Tech Stack

### Frontend

- React
- TypeScript
- Vite
- CSS

### Libraries

- Axios
- Lucide React

### API

- OpenWeather API

---

## 📂 Folder Structure

```text
src/
│
├── components/
│   ├── SearchBar.tsx
│   ├── WeatherCard.tsx
│   ├── WeatherDetails.tsx
│   ├── Forecast.tsx
│   ├── Loader.tsx
│   └── RecentSearches.tsx
│
├── services/
│   └── weatherApi.ts
│
├── types/
│   ├── weather.ts
│   └── forecast.ts
│
├── App.tsx
├── index.css
└── main.tsx
```

---

## ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/yourusername/weather-app.git
```

Navigate into the project

```bash
cd weather-app
```

Install dependencies

```bash
npm install
```

Create a `.env` file in the project root

```env
VITE_WEATHER_API_KEY=YOUR_OPENWEATHER_API_KEY
```

Run the development server

```bash
npm run dev
```

---

## 📦 Build

```bash
npm run build
```

Preview the production build

```bash
npm run preview
```

---

## 🌍 API Reference

This project uses the **OpenWeather API**.

- Current Weather API
- 5-Day / 3-Hour Forecast API

---

## 💡 What I Learned

While building this project, I learned:

- Building reusable React components
- Managing state using React Hooks
- API integration with Axios
- TypeScript interfaces and type safety
- Handling asynchronous requests
- Environment variables in Vite
- Error and loading state management
- Browser Geolocation API
- Local Storage
- Dynamic UI rendering
- Responsive design

---

## 👨‍💻 Author

**Shivam Kumar**

GitHub: https://github.com/yourusername

LinkedIn: https://linkedin.com/in/your-linkedin

---

⭐ If you like this project, consider giving it a star on GitHub!
