import { useState, useEffect } from "react";
import Counter from "./Counter";
import Stats from "./Stats";
import TaskAddForm from "./TaskAddForm";
import TaskList from "./TaskList";
import HiddenComponent from "./HiddenComponent";
import HistoryCardList from "./HistoryCradList";
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
      {
        name: "lunch in product hunt",
        description:
          "i want to make $1000.00 MRR form my first product from 1st month with 80% profit",
        isDone: true,
        id: 1577,
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

export default function ActivityBox({ goal }) {
  const [isAddTask, setIsAddTask] = useState(false);
  // const [everyDaysLog, setEveryDaysLog] = useState(function () {
  //   const storedEveryDayLog = JSON.parse(localStorage.getItem("allTasks"));
  //   if (!storedEveryDayLog) return [];
  //   return storedEveryDayLog;
  // });
  const [everyDaysLog, setEveryDaysLog] = useState(roughtEverydayTask);

  const todaysDate = new Date().toLocaleDateString(); // Date:8/29/2024

  // DERIVE STATE
  let todaysTask;
  let allPreviousTasks;
  if (everyDaysLog.find((eachDay) => eachDay.id === todaysDate)) {
    todaysTask = everyDaysLog.at(-1).tasks;
    allPreviousTasks = everyDaysLog.slice(0, everyDaysLog.length - 1);
  } else {
    todaysTask = [];
    allPreviousTasks = [...everyDaysLog];
  }

  function handleChecked(id) {
    const updatedTask = todaysTask.map((task) =>
      task.id === id ? { ...task, isDone: !task.isDone } : task
    );
    const updatedAllTasks = everyDaysLog.map((day) =>
      day.id === todaysDate ? { ...day, tasks: updatedTask } : day
    );
    setEveryDaysLog(updatedAllTasks);
  }

  function handleDeleteTask(id) {
    const updatedTask = todaysTask.filter((task) => task.id !== id);
    const updatedAllTasks = everyDaysLog.map((day) =>
      day.id === todaysDate ? { ...day, tasks: updatedTask } : day
    );
    setEveryDaysLog(updatedAllTasks);
  }

  function handleAddTask(task) {
    if (everyDaysLog.find((eachDay) => eachDay.id === todaysDate)) {
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

  useEffect(
    function () {
      localStorage.setItem("allTasks", JSON.stringify(everyDaysLog));
    },
    [everyDaysLog]
  );

  return (
    <div className="activity__box">
      <Stats everyDaysLog={everyDaysLog} goalObj={goal} />

      <div className="task__box">
        <TaskList
          tasksList={todaysTask}
          onChecked={handleChecked}
          onDeleteTask={handleDeleteTask}
        />
        {isAddTask && <TaskAddForm onAddTask={handleAddTask} />}
        <div
          className="btn__add-activity"
          onClick={() => setIsAddTask((t) => !t)}
        >
          {isAddTask ? "- Hide Task" : "+ Add Task"}
        </div>
      </div>

      <div className="couner_box">
        <p>
          🚩 Goal to achive <strong>{goal.goalName}</strong>
        </p>
        <Counter goalDay={goal.achiveDate} />

        <HiddenComponent>{goal.goalDes}</HiddenComponent>

        <p>
          💪 I am going to complete {goal.taskPD} task / day to achive my goal
        </p>
      </div>
      <HistoryCardList previousTasks={allPreviousTasks} />
    </div>
  );
}
