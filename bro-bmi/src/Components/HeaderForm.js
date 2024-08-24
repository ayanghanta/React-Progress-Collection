import { useState } from "react";
import Button from "./Button";

export default function HeaderForm({ onAddGym }) {
  const [name, setName] = useState("");
  const [img, setImg] = useState("https://i.pravatar.cc/64");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [isKg, setIsKg] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !weight || !height) return;

    const id = crypto.randomUUID();

    const newCandidate = {
      id,
      name,
      img: `${img}?u=${id}`,
      unit: isKg ? "kg" : "pound",
      height,
      weight,
    };
    onAddGym(newCandidate);

    //reset form
    setName("");
    setWeight("");
    setHeight("");
    setIsKg(true);
  }

  return (
    <div className="header_section">
      <form className="from__header" onSubmit={handleSubmit}>
        <div>
          <label>🏃 Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label>🖼️ Image</label>
          <input
            type="text"
            value={img}
            onChange={(e) => setImg(e.target.value)}
          />
        </div>

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
          <select disabled value={isKg ? "meter" : "inch"}>
            <option value="meter">meters</option>
            <option value="inch">inches</option>
          </select>
        </div>

        <Button color={"green"}>⏬ADD GYM</Button>
      </form>
    </div>
  );
}
