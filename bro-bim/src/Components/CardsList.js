import Candidate from "./Candidate";

export default function CardsList({ candidates, onUpdate, onDelete }) {
  if (candidates.length === 0)
    return (
      <div className="card_list">
        <p className="static_text">Add your Gym members 🏋️</p>
      </div>
    );
  return (
    <div className="card_list">
      {candidates.map((candidate, i) => (
        <Candidate
          candidate={candidate}
          key={i}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
