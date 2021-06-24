import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Weather from "./Weather";

import './App.css';


function App() {
  return (
    <div className="App">
      <div className="container">


      <Weather defaultCity="Innsbruck" />
      <footer>
          This project was coded by{" "}
          <a href="https://www.linkedin.com/in/judith-maier-bisset-4943b198/" target="_blank" rel="noreferrer">
            Judith Maier Bisset
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/judithbisset/react-weather-app" rel="noreferrer"
            target="_blank"
          >
            open-sourced on GitHub.
          </a>{" "}
          <br />
          <span>Photo by Jolene Bisset</span>
          
        </footer>
      </div>

    </div>
  );
}

export default App;
