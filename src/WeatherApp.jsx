import SearchBox from "./SearcBox";
import InfoBox from "./infoBox";
import { useState } from "react";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "wonderland",
    feelsLike: 33.48,
    humidity: 16,
    temp: 35.81,
    tempMax: 35.81,
    tempMin: 35.81,
    weather: "clear sky",
  });

  let updateInfo = (newInfo) =>{
    setWeatherInfo(newInfo);
  }
  return (
    <div>
      <h2>Weather App</h2>
      <h3>Search for the city you want weather of</h3>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info={weatherInfo}/>
    </div>
  );
}
