import React from "react";

import "./styles.css";

export default function Weather() {
    let weatherData = {
        city: "Cheddar",
        date: "24/05/2021",
        description: "Clear",
        temperature: 7,
        humidity: 66,
        wind: 3
    };
    return (
        <div className="Weather">
            <div className="container">
                <div className="card" id="weather-app">
                    <div className="card-body">
                        <p>Weather with Cheddar</p>

                        <br />
                        <form className="search">
                            <div className="row">
                                <div className="col-4">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter a city"
                                        aria-label="city"
                                        id="city-input"
                                        autoComplete="off"
                                    />
                                </div>

                                <div className="col-3">
                                    <button type="submit" className="btn btn-primary">
                                        Search
                  </button>
                                </div>
                                <div className="col-3">
                                    <button className="btn btn-primary">
                                        📌
                  </button>
                                </div>
                            </div>
                        </form>
                        <br />
                        <div className="row">
                            <div className="col-6">
                                <div className="clearfix weather-temperature">
                                    <div className="card" id="basic-info">
                                        <div className="card-body" id="current-weather">
                                            <ul className="weather-info">
                                                <li>
                                                    <h1 className="card-title">{weatherData.city}</h1>
                                                </li>
                                                <li>
                                                    Last updated: {weatherData.date}{" "}
                                                    <span id="date"></span>
                                                </li>

                                                <li>
                                                    <p>
                                                        <span id="description">
                                                            {weatherData.description}
                                                        </span>
                                                    </p>
                                                </li>
                                                <li
                                                    id="temperature-design"
                                                    className="d-flex justify-content-center"
                                                >
                                                    <img
                                                        src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
                                                        alt="Clear"
                                                        id="icon"
                                                        className="float-left"
                                                    />
                                                    <span id="degree">{weatherData.temperature} </span>
                                                    <span>
                                                        <a href="/" id="celsius" className="active">
                                                            °C{" "}
                                                        </a>
                                                    </span>
                                                    <span>
                                                        <a href="/" id="fahrenheit">
                                                            |°F{" "}
                                                        </a>
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div id="extra-information-weather">
                                            <ul id="extra-weather-info">
                                                <li>
                                                    Humidity:{" "}
                                                    <span id="humidity">{weatherData.humidity}</span>%
                        </li>
                                                <li>
                                                    Wind: <span id="wind">{weatherData.wind}</span> km/h
                        </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="card" id="image-style">
                                    <div className="card-body" id="cheddar-image">
                                        <div className="image">


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <br />

                        <div className="weather-forecast"></div>
                    </div>

                    <br />
                    <p id="git-hub"><a id="git-hub-link" href="https://github.com/judithbisset/react-weather-app" target="_blank" rel="noreferrer">Open-source
          code</a> by Judith Maier Bisset
        <br />
                        <span id="artwork">Artwork by Elizabeth Bisset</span>
                    </p>

                </div>
            </div>
        </div>
    );
}
