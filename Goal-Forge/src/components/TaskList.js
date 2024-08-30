import Task from "./Task";

export default function TaskList({ tasksList, onChecked, onDeleteTask }) {
  return (
    <ul className="task_list">
      <p className="tag">🚀 Today's Mission: Crush Your Tasks!</p>
      {tasksList.map((task) => (
        <Task
          task={task}
          key={task.id}
          onChecked={onChecked}
          onDelete={onDeleteTask}
        />
      ))}
    </ul>
  );
}
