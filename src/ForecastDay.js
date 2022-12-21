import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";

export default function ForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div>
      <div className="weather-forecast-date mb-3">{day()}</div>
      <WeatherIcon icon={props.data.weather[0].icon} size={30} />
      <div className="weather-forecast-temperatures mt-1">
        <span className="weather-forecast-temperature-max">
          {minTemperature()}{" "}
        </span>
        /
        <strong className="weather-forecast-temperature-min">
          {" "}
          {maxTemperature()}
        </strong>
      </div>
    </div>
  );
}
