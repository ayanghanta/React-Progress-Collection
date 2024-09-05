import SingleCard from "./SingleCard";

export default function WeatherCards({ weather }) {
  return (
    <ul className="weather_cards">
      {weather.time.map((time, i) => (
        <SingleCard
          day={time}
          code={weather.weathercode[i]}
          max={weather.temperature_2m_max[i]}
          min={weather.temperature_2m_min[i]}
          key={time}
          isToday={i === 0}
        />
      ))}
    </ul>
  );
}
