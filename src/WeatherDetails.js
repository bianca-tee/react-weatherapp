import React from "react";
import "./WeatherDetails.css";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherDetails(props) {
  return (
    <div className="Weather">
      <div className="col-12 city-col">
        <h2 className="city">{props.data.city}</h2>
        <h5 className="date-time">
          <FormattedDate date={props.data.date} />
        </h5>
      </div>
      <div className="row mx-0">
        <div className="col-6">
          <div className="Temperature">
            <h4 className="current-temp">{props.data.temperature}</h4>
            <span className="current-temp-units">°C</span>
          </div>
        </div>
        <div className="col-2">
          <div className="main-icon">
            <WeatherIcon icon={props.data.icon} size={80} />
          </div>
        </div>
        <div className="col-4">
          <div className="WeatherDetails">
            <ul>
              <li className="text-capitalize">{props.data.description}</li>
              <li>
                <span>{props.data.minTemp}°</span> /
                <strong> {props.data.maxTemp}°</strong>
              </li>
              <li>
                <span>{props.data.humidity}</span>% humidity
              </li>
              <li>
                <span>{props.data.wind}</span>m/s wind
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
