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
  taskPD: 5,
  startingDay: Date.now(),
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
          <ActivityBox goal={goal} />
        )}
      </Main>
    </div>
  );
}

function Main({ children }) {
  return <div className="main">{children}</div>;
}

const roughtEverydayTask = [
  {
    id: "8/28/2024",
    tasks: [
      {
        name: "lunch in product hunt",
        description:
          "i want to make $1000.00 MRR form my first product from 1st month with 80% profit",
        isDone: true,
        id: 15,
      },
    ],
  },
  {
    id: "8/29/2024",
    tasks: [
      {
        name: "go to bye a mac book",
        description: "i want to use to make my development speed fast",
        isDone: true,
        id: 156,
      },
      {
        name: "go to bye a mac book",
        description: "i want to use to make my development speed fast",
        isDone: false,
        id: 151,
      },
      {
        name: "go to bye a mac book",
        description: "i want to use to make my development speed fast",
        isDone: true,
        id: 154,
      },
    ],
  },
];

function ActivityBox({ goal }) {
  const [isAddTask, setIsAddTask] = useState(false);
  const [everyDaysLog, setEveryDaysLog] = useState(roughtEverydayTask);

  const todaysTask = everyDaysLog.at(-1).tasks;
  const todaysDate = new Date().toLocaleDateString(); // Date:8/29/2024

  function handleChecked(id) {
    const updatedTask = todaysTask.map((task) =>
      task.id === id ? { ...task, isDone: !task.isDone } : task
    );
    setEveryDaysLog((eachDay) =>
      eachDay.map((day) =>
        day.id === todaysDate ? { ...day, tasks: updatedTask } : day
      )
    );
    // setTodaysTask(() =>
    //   todaysTask.map((task) =>
    //     task.id === id ? { ...task, isDone: !task.isDone } : task
    //   )
    // );
  }

  function handleAddTask(task) {
    if (everyDaysLog.find((eachDay) => eachDay.id === todaysDate)) {
      // if used add task in same day and alreday there is todays log then it goes into this
      setEveryDaysLog((eachDay) =>
        eachDay.map((day) =>
          day.id === todaysDate ? { ...day, tasks: [...todaysTask, task] } : day
        )
      );
    } else {
      const newDayLog = {
        id: todaysDate,
        tasks: [task],
      };
      setEveryDaysLog((eachDay) => [...eachDay, newDayLog]);
    }

    setIsAddTask(false);
  }

  return (
    <div className="activity__box">
      <Stats everyDaysLog={everyDaysLog} goalObj={goal} />

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

      <Counter goalDay={goal.achiveDate} />
      {/* <div>previous record</div> */}
    </div>
  );
}
