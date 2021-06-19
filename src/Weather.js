
import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./styles.css";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: Math.round(response.data.wind.speed),
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
    const apiKey = "fe03e22b117c78c4cedff8f906c7cf35";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
   if (weatherData.ready) {
    return (
        <div className="Weather">
            <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-7">
            
                 <input
                     type="search"
                    className="form-control"
                    placeholder="Enter a city"
                    autoFocus="on"
                    onChange={handleCityChange} />
                </div>

                <div className="col-5">
                <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
                                    
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
        search();
    
    return "Loading";
        
  }
}
