import { useState } from "react";
import Button from "./Button";

export default function CandidateForm({ candidate, onUpdate, onSave }) {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [isKg, setIsKg] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    if (!weight && !height) return;

    const updateObj = {
      id: candidate.id,
      weight: !weight ? candidate.weight : weight,
      height: !height ? candidate.height : height,
      unit: isKg ? "kg" : "pound",
    };

    onUpdate(updateObj);
    setWeight("");
    setHeight("");
    setIsKg(true);

    // hide the form
    onSave();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>🏋️ Weight</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(+e.target.value)}
          step="0.001"
          min="0"
        />
        <select
          value={isKg ? "kg" : "pound"}
          onChange={() => setIsKg((u) => !u)}
        >
          <option value="kg">Kg</option>
          <option value="pound">Pounds</option>
        </select>
      </div>

      <div>
        <label>📏Height</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(+e.target.value)}
          step="0.001"
          min="0"
        />
        <select disabled value={isKg ? "meter" : "inches"}>
          <option value="meter">meters</option>
          <option value="inches">inches</option>
        </select>
      </div>

      <Button color={"orange"}>Save</Button>
    </form>
  );
}
