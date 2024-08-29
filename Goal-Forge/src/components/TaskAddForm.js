import { useState } from "react";
import Button from "./Button";

export default function TaskAddForm({ onAddTask }) {
  const [taskName, setTaskName] = useState("");
  const [taskDesc, setTaskDesc] = useState("");

  function handleSubmit(e) {
    if (!taskName) return;
    const id = crypto.randomUUID();
    e.preventDefault();
    const newTask = {
      name: taskName,
      description: taskDesc,
      id,
      isDone: false,
    };
    onAddTask(newTask);

    setTaskName("");
    setTaskDesc("");
  }

  return (
    <div className="task__add">
      <form onSubmit={handleSubmit}>
        <label>⚒️Today's task</label>
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />

        <label>📃description (optional)</label>
        <input
          type="text"
          value={taskDesc}
          onChange={(e) => setTaskDesc(e.target.value)}
        />
        <Button>🌞 let's start</Button>
      </form>
    </div>
  );
}
