export default function Task({ task, onChecked }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={() => onChecked(task.id)}
      />
      <p style={task.isDone ? { textDecoration: "line-through" } : {}}>
        <span className="title">{task.name}</span>
        <span className="description">{task.description}</span>
      </p>
    </li>
  );
}
