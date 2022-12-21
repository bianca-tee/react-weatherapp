import React, { useState } from "react";
import ForecastDay from "./ForecastDay";
import axios from "axios";
import "./Forecast.css";

export default function Forecast(props) {
  let [ready, setReady] = useState(false);
  let [forecast, setForecast] = useState({});

  function handleResponse(response) {
    setReady(true);
    setForecast(response.data.daily);
  }

  if (ready) {
    return (
      <div className="Forecast row mx-0 mt-1">
        {forecast.map(function (forecast, index) {
          if (index < 5) {
            return (
              <div className="col px-0" key={index}>
                <ForecastDay data={forecast} />
              </div>
            );
          }
        })}
      </div>
    );
  } else {
    let apiKey = "99b8f9330a1bfba3a85e523fd3c2e528";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
