import { useState, useEffect } from "react";
export default function Counter({ goalDay }) {
  const [dayCount, setDayCount] = useState(0);
  const [hourCount, setHourCount] = useState(0);
  const [minCount, setMinCount] = useState(0);

  const lastDay = new Date(`${goalDay}T23:59:59`);

  function calcTimer() {
    const today = new Date();
    const timeDifference = lastDay.getTime() - today.getTime();

    const days = Math.floor(timeDifference / (24 * 3600 * 1000));
    const hours = Math.floor((timeDifference % (24 * 3600 * 1000)) / 3600000);
    const munits = Math.floor((timeDifference % (3600 * 1000)) / 60000);

    setDayCount(days);
    setHourCount(hours);
    setMinCount(munits);
  }
  // when component mounting
  useEffect(calcTimer, []);

  // 1s interval
  setInterval(calcTimer, 60 * 1000);
  return (
    <div className="counter">
      <span>⌛</span>
      <span>{dayCount} DAYS</span>
      <span>{hourCount} HOURS</span>
      <span>{minCount} MINUTES</span>
    </div>
  );
}
