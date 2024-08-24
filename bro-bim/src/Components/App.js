import { useState } from "react";
import Logo from "./Logo";
import HeaderForm from "./HeaderForm";
import CardsList from "./CardsList";
import Footer from "./Footer";

/*

Underweight: BMI < 18.5
Normal weight: 18.5 ≤ BMI < 25
Overweight: 25 ≤ BMI < 30
Obese: BMI ≥ 30


*/
const dummyData = [
  {
    id: 123,
    name: "Alex kel",
    img: "https://i.pravatar.cc/64?u=gfgnh",
    unit: "kg",
    height: 1.7,
    weight: 75,
  },
];

export default function App() {
  const [candidateList, setCandidateList] = useState(dummyData);

  function handleAddGym(candidate) {
    setCandidateList((candidates) => [...candidates, candidate]);
  }

  function handleUpdate(obj) {
    setCandidateList((candidates) =>
      candidates.map((cadidate) =>
        cadidate.id === obj.id
          ? {
              ...cadidate,
              height: obj.height,
              weight: obj.weight,
              unit: obj.unit,
            }
          : cadidate
      )
    );
  }

  function handleDelete(id) {
    setCandidateList((candidates) =>
      candidates.filter((candidate) => candidate.id !== id)
    );
  }

  return (
    <div className="app">
      <Logo />
      <HeaderForm onAddGym={handleAddGym} />
      <CardsList
        candidates={candidateList}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
      />
      <Footer candidates={candidateList} />
    </div>
  );
}
