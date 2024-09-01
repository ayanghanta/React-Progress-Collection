import HiddenComponent from "./HiddenComponent";

export default function HistoryCardList({ previousTasks }) {
  const taskHostory = [...previousTasks];
  return (
    <div className="history_card_list">
      {taskHostory.reverse().map((eachDay) => (
        <HistoryCard date={eachDay.id} key={eachDay.id}>
          {eachDay.tasks.map((task) => (
            <HistoryTaskItems key={task.id} task={task} />
          ))}
        </HistoryCard>
      ))}
    </div>
  );
}
function HistoryCard({ date, children }) {
  return (
    <ul>
      <p className="history_date">Tasks of {new Date(date).toDateString()}</p>
      {children}
    </ul>
  );
}

function HistoryTaskItems({ task }) {
  return (
    <li>
      <input type="checkbox" checked={task.isDone} disabled />

      <div style={task.isDone ? { textDecoration: "line-through" } : {}}>
        <span className="title">{task.name}</span>
        <HiddenComponent displaydWord={5}>{task.description}</HiddenComponent>
      </div>
    </li>
  );
}
