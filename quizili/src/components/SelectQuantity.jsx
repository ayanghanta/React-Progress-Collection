import { useState } from "react";
import Button from "./Button";
import { useQuiz } from "../context/QuizContext";
// import styles from "./SelectQuantity.module.css";

const questionsQuantityOptions = [5, 10, 15, 20];

function SelectQuantity() {
  const { dispatch } = useQuiz();
  const [choosenQuantity, setChoosenQuantity] = useState("");

  return (
    <div className="quizCustomizeContainer">
      <h2>How Many Questions?</h2>
      <ul>
        {questionsQuantityOptions.map((quatity) => (
          <QuatityCard
            quatity={quatity}
            key={quatity}
            onChooseQuantity={setChoosenQuantity}
            choosenQuantity={choosenQuantity}
          />
        ))}
      </ul>
      {choosenQuantity && (
        <Button
          type="next"
          onClick={() =>
            dispatch({ type: "quantitySelected", payload: choosenQuantity })
          }
        >
          next &rarr;
        </Button>
      )}
    </div>
  );
}

function QuatityCard({ quatity, onChooseQuantity, choosenQuantity }) {
  return (
    <li
      className={quatity === choosenQuantity ? "selected" : ""}
      onClick={() => onChooseQuantity(quatity)}
    >
      {quatity}
    </li>
  );
}

export default SelectQuantity;
