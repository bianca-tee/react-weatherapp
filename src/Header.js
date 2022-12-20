import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="row Header">
      <div className="col-12">
        <h1 className="title">
          weather<span className="title-app">app</span>
        </h1>
      </div>
    </div>
  );
}
