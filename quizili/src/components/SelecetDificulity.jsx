import { useState } from "react";
import Button from "./Button";
import { useQuiz } from "../context/QuizContext";

const difficilityOptions = ["Easy", "Medium", "Hard"];

function SelecetDificulity() {
  const { dispatch } = useQuiz();
  const [chooseDiffi, setChooseDiffi] = useState("");

  return (
    <div className="quizCustomizeContainer">
      <h2>Select Quiz Difficulty</h2>
      <ul>
        {difficilityOptions.map((label) => (
          <DificilityCard
            label={label}
            key={label}
            onChooseDifii={setChooseDiffi}
            chooseDiffi={chooseDiffi}
          />
        ))}
      </ul>
      {chooseDiffi && (
        <Button
          type="next"
          onClick={() =>
            dispatch({ type: "difficulitySelected", payload: chooseDiffi })
          }
        >
          next &rarr;
        </Button>
      )}
    </div>
  );
}

function DificilityCard({ label, onChooseDifii, chooseDiffi }) {
  return (
    <li
      onClick={() => onChooseDifii(label)}
      className={label === chooseDiffi ? "selected" : ""}
    >
      {label}
    </li>
  );
}

export default SelecetDificulity;
