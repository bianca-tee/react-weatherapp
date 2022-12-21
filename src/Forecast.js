import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast row mx-0 mt-1">
      <div className="col px-0">
        <div className="weather-forecast-date mb-3">Date</div>
        <WeatherIcon icon="01d" size={30} />
        <div className="weather-forecast-temperatures mt-1">
          <span className="weather-forecast-temperature-max">14</span>/
          <strong className="weather-forecast-temperature-min">18</strong>
        </div>
      </div>
      <div className="col px-0">
        <div className="weather-forecast-date mb-3">Date</div>
        <WeatherIcon icon="01d" size={30} />
        <div className="weather-forecast-temperatures mt-1">
          <span className="weather-forecast-temperature-max">14</span>/
          <strong className="weather-forecast-temperature-min">18</strong>
        </div>
      </div>
      <div className="col px-0">
        <div className="weather-forecast-date mb-3">Date</div>
        <WeatherIcon icon="01d" size={30} />
        <div className="weather-forecast-temperatures mt-1">
          <span className="weather-forecast-temperature-max">14</span>/
          <strong className="weather-forecast-temperature-min">18</strong>
        </div>
      </div>
      <div className="col px-0">
        <div className="weather-forecast-date mb-3">Date</div>
        <WeatherIcon icon="01d" size={30} />
        <div className="weather-forecast-temperatures mt-1">
          <span className="weather-forecast-temperature-max">14</span>/
          <strong className="weather-forecast-temperature-min">18</strong>
        </div>
      </div>
      <div className="col px-0">
        <div className="weather-forecast-date mb-3">Date</div>
        <WeatherIcon icon="01d" size={30} />
        <div className="weather-forecast-temperatures mt-1">
          <span className="weather-forecast-temperature-max">14</span>/
          <strong className="weather-forecast-temperature-min">18</strong>
        </div>
      </div>
    </div>
  );
}
