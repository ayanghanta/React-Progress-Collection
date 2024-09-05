export default function SingleCard({ day, code, max, min, isToday }) {
  return (
    <li className="card">
      <span>{getWeatherIcon(code)}</span>
      <p>{isToday ? "Today" : dateFormat(day)}</p>
      <p className="temp-text">
        {min}&deg;c &mdash; {max}&deg;c
      </p>
    </li>
  );
}
function getWeatherIcon(wmoCode) {
  const icons = new Map([
    [[0], "☀️"],
    [[1], "🌥️"],
    [[2], "⛅️"],
    [[3], "☁️"],
    [[45, 48], "🌫️"],
    [[51, 56, 61, 66, 80], "🌦️"],
    [[53, 55, 63, 65, 57, 67, 81, 82], "🌧️"],
    [[71, 73, 75, 77, 85, 86], "🌨️"],
    [[95], "🌩️"],
    [[96, 99], "⛈️"],
  ]);
  const arr = [...icons.keys()].find((key) => key.includes(wmoCode));
  if (!arr) return "NOT FOUND";
  return icons.get(arr);
}

function dateFormat(inputdate) {
  const day = new Date(inputdate).toDateString().split(" ")[0];
  return day;
}
