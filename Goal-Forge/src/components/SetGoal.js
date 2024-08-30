import { useState } from "react";
import Button from "./Button";

export default function SetGoal({ onSetGoal }) {
  const [goalName, setGoalName] = useState("");
  const [goalDes, setGoalDes] = useState("");
  const [taskPD, setTaskPD] = useState("");
  const [achiveDate, setAchiveDate] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newGoal = {
      goalName,
      goalDes,
      taskPD,
      achiveDate,
      startingDay: Date.now(),
    };
    onSetGoal(newGoal);
  }

  return (
    <div className="goalSet__section">
      <form onSubmit={handleSubmit}>
        <label>🏆 What's Your Big Dream?</label>
        <input
          type="text"
          value={goalName}
          onChange={(e) => setGoalName(e.target.value)}
        />

        <label>💡 Your goal description</label>
        <input
          type="text"
          value={goalDes}
          onChange={(e) => setGoalDes(e.target.value)}
        />

        <label>✅ Daily Tasks to Crush</label>
        <input
          type="number"
          min="0"
          value={taskPD}
          onChange={(e) => setTaskPD(+e.target.value)}
        />

        <label>📅 Goal Completion Date</label>
        <input
          type="date"
          value={achiveDate}
          onChange={(e) => setAchiveDate(e.target.value)}
        />
        <Button>🌟 Make It Happen!</Button>
      </form>
    </div>
  );
}
