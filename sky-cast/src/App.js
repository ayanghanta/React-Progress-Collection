import { useState, useEffect, useRef } from "react";
import WeatherCards from "./WeatherCards";
import Loder from "./Loder";
import Error from "./Error";

export default function App() {
  const [inputLocation, setInputLocation] = useState(() => {
    return localStorage.getItem("weatherLoc")
      ? localStorage.getItem("weatherLoc")
      : "";
  });
  const [weather, setWeather] = useState({});
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const countryCode = useRef(null);

  function handleInput(e) {
    setInputLocation((location) => e.target.value);
  }

  useEffect(
    function () {
      setWeather({});
      async function fetchData() {
        if (inputLocation.length < 2) return setWeather({});
        setIsLoading(true);
        setError("");
        localStorage.setItem("weatherLoc", inputLocation);
        try {
          const geoResponce = await fetch(
            `https://geocoding-api.open-meteo.com/v1/search?name=${inputLocation}`
          );
          const data = await geoResponce.json();
          const {
            latitude: lat,
            longitude: lng,
            country_code,
            timezone,
          } = data?.results[0];
          countryCode.current = country_code;

          const weatherRes = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&timezone=${timezone}&daily=weathercode,temperature_2m_max,temperature_2m_min`
          );

          const waetherData = await weatherRes.json();
          setWeather(waetherData.daily);
          // console.log(waetherData.daily);
        } catch (err) {
          console.log(err);
          setError(`Not find any place named ${inputLocation}`);
        } finally {
          setIsLoading(false);
        }
      }
      fetchData();
    },
    [inputLocation]
  );

  return (
    <div className="app">
      <h1>Sky Cast</h1>
      <div>
        <input
          type="text"
          placeholder="Seach for places..."
          value={inputLocation}
          onChange={handleInput}
        />
      </div>

      {isloading && <Loder />}
      {error.length > 2 && <Error message={error} />}
      {weather?.time && error.length === 0 ? (
        <>
          <TextLocation code={countryCode.current} location={inputLocation} />
          <WeatherCards weather={weather} />
        </>
      ) : (
        <p className="static-text">
          {isloading ? "Searching ..." : "Search for Weather"}
        </p>
      )}
    </div>
  );
}

function TextLocation({ code, location }) {
  return (
    <p className="place-name-text">
      <span>Weather of {location},</span>
      {code && (
        <img
          src={`https://flagsapi.com/${code}/flat/64.png`}
          alt={`flag of ${code}`}
        />
      )}
    </p>
  );
}
