import { useEffect, useState } from "react";
import HeaderSection from "./HeaderSection";
import Intro from "./Intro";
import SetGoal from "./SetGoal";
import ActivityBox from "./ActivityBox";

// const rough = {
//   goalName: "bds",
//   goalDes: "kjsfkjsbkjsd",
//   taskPD: 5,
//   startingDay: Date.now(),
//   achiveDate: "2024-08-31",
// };

export default function App() {
  const [goal, setGoal] = useState({});

  // GET GOAL OBJECT FORM LOCAL STORAGE
  useEffect(function () {
    const stotedGoalObj = JSON.parse(localStorage.getItem("goal"));

    if (!stotedGoalObj) return setGoal({});
    setGoal(stotedGoalObj);
  }, []);

  function handleSetGoal(newGoal) {
    setGoal(newGoal);

    //FIXME: STORED THE GOAL OBJECT TO THE LOCAL STORAGE
    // useEffect(function () {
    //   localStorage.setItem("goal", newGoal);
    // }, []);
    localStorage.setItem("goal", JSON.stringify(newGoal));
  }
  return (
    <div className="app">
      <HeaderSection />
      <Main>
        {goal.goalName ? (
          <ActivityBox goal={goal} />
        ) : (
          <>
            <Intro />
            <SetGoal onSetGoal={handleSetGoal} />
          </>
        )}
      </Main>
    </div>
  );
}

function Main({ children }) {
  return <div className="main">{children}</div>;
}
