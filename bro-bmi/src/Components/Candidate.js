import { useState } from "react";
import Button from "./Button";
import CandidateForm from "./CandidateForm";
import { calculateBMI } from "./helper";

export default function Candidate({ candidate, onUpdate, onDelete }) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const calcBMI = calculateBMI(
    candidate.weight,
    candidate.height,
    candidate.unit
  );

  return (
    <div className="candidate">
      <img src={candidate.img} alt={candidate.name} />
      <h2>{candidate.name}</h2>
      {calcBMI < 18.5 && <p className="tag underweight">underweight</p>}
      {calcBMI < 25 && calcBMI >= 18.5 && <p className="tag normal">normal</p>}
      {calcBMI < 30 && calcBMI >= 25 && (
        <p className="tag overweight">overweight</p>
      )}
      {calcBMI >= 30 && <p className="tag obese">obese</p>}

      <div className="data">
        <p>🚶‍♀️ BMI: {calcBMI}</p>
        <p>
          🏋️ Weight: {candidate.weight}
          {candidate.unit === "kg" ? " kg" : " pounds"}
        </p>
        <p>
          📏 Height: {candidate.height}
          {candidate.unit === "kg" ? " meters" : " inches"}
        </p>
        {isFormOpen && (
          <CandidateForm
            candidate={candidate}
            onUpdate={onUpdate}
            onSave={() => setIsFormOpen((o) => !o)}
          />
        )}
        <div className="buttons">
          <Button color={"red"} onClick={() => onDelete(candidate.id)}>
            Delete
          </Button>
          <Button color={"blue"} onClick={() => setIsFormOpen((o) => !o)}>
            {isFormOpen ? "Close" : "Update"}
          </Button>
        </div>
      </div>
    </div>
  );
}
