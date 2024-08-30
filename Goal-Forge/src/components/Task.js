import HiddenComponent from "./HiddenComponent";

export default function Task({ task, onChecked, onDelete }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={() => onChecked(task.id)}
      />

      <div style={task.isDone ? { textDecoration: "line-through" } : {}}>
        <span className="title">{task.name}</span>
        <HiddenComponent displaydWord={5}>{task.description}</HiddenComponent>
        {/* <span className="description"></span> */}
      </div>
      <span className="btn-delete" onClick={() => onDelete(task.id)}>
        ❌
      </span>
    </li>
  );
}
