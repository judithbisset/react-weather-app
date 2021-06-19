
import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";


import "./styles.css";
import axios from "axios";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
    function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      city: response.data.name,
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
    const apiKey = "14851b7f540a88c1c818c45b5f539543";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
   if (weatherData.ready) {
    return (
        <div className="Weather">
            
                        
                        <form className="search">
                            <div className="row">
                                <div className="col-4">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter a city"
                                        aria-label="city"
                                        id="city-input"
                                        autoFocus="on"
                                        onChange={handleCityChange}
                                    />
                                </div>

                                <div className="col-3">
                                    <button type="submit" className="btn btn-primary">Search</button>
                                </div>
                            </div>
                        </form>
                        <WeatherInfo data={weatherData} />
                        <div className="github">
          <p id="git-hub"><a id="git-hub-link" href="https://github.com/judithbisset/react-weather-app" target="_blank" rel="noreferrer">Open-source
          code</a> by Judith Maier Bisset
        <br />
                        <span id="artwork">Artwork by Elizabeth Bisset</span>
                    </p>
      </div>
                        
        
      </div>
      
    );
    } else {
    
    return(
        <div className="loading">Loading...</div>
    );
  }
}
