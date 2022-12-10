import "./App.css";
import React from "react";
import Header from "./Header";
import Weather from "./Weather";

export default function App() {
  return (
    <div>
      <div className="container App">
        <Header />
        <Weather defaultCity="Sydney" />
      </div>
      <footer className="text-center">
        Open-source code by Bianca Treu available on{" "}
        <a
          href="https://github.com/bianca-tee"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>{" "}
        and hosted on Netlify
      </footer>
    </div>
  );
}
