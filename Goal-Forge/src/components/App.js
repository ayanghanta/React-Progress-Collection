import { useEffect, useState } from "react";
import HeaderSection from "./HeaderSection";
import Intro from "./Intro";
import SetGoal from "./SetGoal";
import Counter from "./Counter";
import Stats from "./Stats";

const rough = {
  goalName: "bds",
  goalDes: "kjsfkjsbkjsd",
  taskPD: 9,
  achiveDate: "2024-08-31",
};

export default function App() {
  const [goal, setGoal] = useState(rough);

  function handleSetGoal(newGoal) {
    setGoal(newGoal);
  }
  return (
    <div className="app">
      <HeaderSection />
      <Main>
        {goal.length === 0 ? (
          <>
            <Intro />
            <SetGoal onSetGoal={handleSetGoal} />
          </>
        ) : (
          <ActivityBox goalDay={goal.achiveDate} />
        )}
      </Main>
    </div>
  );
}

function Main({ children }) {
  return <div className="main">{children}</div>;
}

function ActivityBox({ goalDay }) {
  return (
    <div className="activity__box">
      <Stats />
      <div>ADD TODAY'S ACTIVITY</div>
      <Counter goalDay={goalDay} />
      <div>previous record</div>
    </div>
  );
}

// Button
