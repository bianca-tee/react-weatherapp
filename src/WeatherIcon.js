import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import "./TemperatureImage.css";

export default function WeatherIcon(props) {
  return (
    <ReactAnimatedWeather
      icon="CLEAR_DAY"
      color="orange"
      size={64}
      animate={true}
    />
  );
}
