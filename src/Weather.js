import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherDetails from "./WeatherDetails.js";
import Forecast from "./Forecast.js";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      minTemp: Math.round(response.data.main.temp_min),
      maxTemp: Math.round(response.data.main.temp_max),
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].main,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      icon: response.data.weather[0].icon,
      coordinates: response.data.coord,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    let apiKey = `99b8f9330a1bfba3a85e523fd3c2e528`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="row Body">
        <div className="col-12 Search">
          <form action="" className="search-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter your city"
              className="city-box"
              autoFocus="on"
              onChange={handleCityChange}
            />
            <button type="submit" className="search-button">
              Search
            </button>
          </form>
        </div>
        <WeatherDetails data={weatherData} />
        <Forecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return <p>Loading...</p>;
  }
}
