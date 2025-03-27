import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { colors } from "@mui/material";
import { red } from "@mui/material/colors";
export default function SearchBox({ updateInfo }) {
  let [city, setcity] = useState("");
  let [error, setError] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "f9051df718a8bda8ed102f7bccfbbba2";

  let getWeatherInfo = async () => {
    let response = await fetch(
      `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );
    let jsonRespone = await response.json();
    // console.log(jsonRespone);
    try {
      let result = {
        city: jsonRespone.name,
        humidity: jsonRespone.main.humidity,
        temp: jsonRespone.main.temp,
        tempMin: jsonRespone.main.temp_min,
        tempMax: jsonRespone.main.temp_max,
        feelsLike: jsonRespone.main.feels_like,
        weather: jsonRespone.weather[0].description,
      };
      console.log(result);
      return result;
    } catch (error) {
      throw (error);
    }
  };

  let handleChange = (evt) => {
    setcity(evt.target.value);
  };
  let handleSubmit = async (evt) => {
    try {
      evt.preventDefault();
      console.log(city);
      setcity("");
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
    } catch (error) {
        setError(true);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="Name of city"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button variant="contained" type="submitt">
          Search
        </Button>
        {error && <p style={{colors:"red"}}>No such place found</p>}
      </form>
    </div>
  );
}
