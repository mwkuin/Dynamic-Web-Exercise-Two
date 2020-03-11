import React, { useEffect, useState } from "react";
import axios from "axios";

import { useHistory } from "react-router-dom";

//API Keys
const defaultKey = "ae9b5e85a40cf839b952f643c946c305";

function Home () {
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState("Seoul");
  const [current, setCurrent] = useState("");
  const [currentWind, setWind] = useState("");
  const [cloudiness, setCloudiness] = useState(0);
  const [weatherType, setWeatherType] = useState("Clouds");

  let history = useHistory();

  useEffect(() => {
  //Get city from URL
  let searchParams = history.location.search;
  const urlParams = new URLSearchParams(searchParams);
  let city = urlParams.get("city");
  if (city) { //if statement to make sure city value exists
    setCity(city);
  }
  setCity(city);
}, [history]);


  useEffect(() => {
    // Make a request for the weather by city
axios
  .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${defaultKey} `
  ) //set units in the api, {city}&units=imperial&appid
  .then(function (response) {
    // handle success
    console.log(response);
    setWeatherData(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })

}, [city]);



useEffect(() => {

  if (weatherData.main) {
    setCurrent(weatherData.main);
    setWind(weatherData.wind);
    // setCloudiness(weatherData.clouds.all);
    let cloudinessValue = weatherData.clouds.all / 200;
    setCloudiness(cloudinessValue);

    setWeatherType(weatherData.weather[0].main);

  }
}, [weatherData]);



  return (
    <div className="Home" style={{ backgroundColor: `rgba(0,0,0,${cloudiness})` }}>
    <h1>Weather in {city}</h1>
      <div className="WeatherInfo">
        <div className="WeatherInfo_Image">
        <img src="" alt="" />

        </div>
        <div className="WeatherInfo_Data">
          <div className="CurrentTemperature">
            <p className="CurrentTemperatureTemp">{current.temp}&#176;</p> // eatherData.main && weatherData.main.temp brackets indicates it's executing javascript versus html
            <p className="CurrentTemperatureLabel">Current Temperature</p>
          </div>
        <div className="OtherTemperatures">
          <p>
            high temp: {current.temp_max}&#176;
          </p>
          <p>
            low temp: {current.temp_min}&#176;
          </p>
        </div>
          <p> humidty: {current.humidity}%</p> //on the first render of weatherData is an empty object, so && to keep going
          <p> wind: {currentWind.speed}mph</p>


        </div>
      </div>
    </div>
  );
}

export default Home;
