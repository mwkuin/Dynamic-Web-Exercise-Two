import React from "react";

//API Keys
const defaultKey = "ae9b5e85a40cf839b952f643c946c305";

function Home () {
  return (
    <div className="Home">
    <h1>Weather in "City"</h1>
      <div className="WeatherInfo">
        <div className="WeatherInfo_Image">
        <img src="" alt="" />

        </div>
        <div className="WeatherInfo_Data">
          <div className="CurrentTemperature">
            <p className="CurrentTemperatureTemp">48deg</p>
            <p className="CurrentTemperatureLabel">Current Temperature</p>
          </div>
        <div className="OtherTemperatures">
          <p>
            high temp: 53&#176
          </p>
          <p>
            low temp: 32deg
          </p>
        </div>
          <p> humidty: 100%</p>
          <p> wind: 10mph</p>


        </div>
      </div>
    </div>
  );
}

export default Home;
