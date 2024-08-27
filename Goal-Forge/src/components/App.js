import { useState } from "react";
import HeaderSection from "./HeaderSection";
import Intro from "./Intro";
import SetGoal from "./SetGoal";
import Counter from "./Counter";
import Stats from "./Stats";
import TaskAddForm from "./TaskAddForm";
import TaskList from "./TaskList";

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

const tempTask = [
  {
    name: "10 twittes",
    description:
      "I have no idea i just wnat to make it happen, that's why i decidede to makes this tweets",
    isDone: false,
    id: 15,
  },
];

function ActivityBox({ goalDay }) {
  const [isAddTask, setIsAddTask] = useState(false);
  const [todaysTask, setTodaysTask] = useState(tempTask);
  const [greatStar, setGreatStar] = useState(0);
  const [star, setStar] = useState(0);

  const maxStar = 100;
  const goalProgress = 100;
  const taskSkipped = 0;

  function calcStar() {}

  function handleChecked(id) {
    setTodaysTask(() =>
      todaysTask.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
  }

  function handleAddTask(task) {
    setTodaysTask((tasks) => [...tasks, task]);
    setIsAddTask(false);
  }

  return (
    <div className="activity__box">
      <Stats />

      <div className="task__box">
        <TaskList tasksList={todaysTask} onChecked={handleChecked} />
        {isAddTask && <TaskAddForm onAddTask={handleAddTask} />}
        <div
          className="btn__add-activity"
          onClick={() => setIsAddTask((t) => !t)}
        >
          {isAddTask ? "- Hide Task" : "+ Add Task"}
        </div>
      </div>

      <Counter goalDay={goalDay} />
      {/* <div>previous record</div> */}
    </div>
  );
}
