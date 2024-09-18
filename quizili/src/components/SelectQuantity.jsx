import { useState } from "react";
import Button from "./Button";
import { useQuiz } from "../context/QuizContext";
// import styles from "./SelectQuantity.module.css";

const questionsQuantityOptions = [5, 10, 15, 20];

function SelectQuantity() {
  const { dispatch } = useQuiz();
  const [choosenQuantity, setChoosenQuantity] = useState("");
  const [isChooseOther, setChooseOther] = useState(false);
  const MIN_QUIZ_QUESTION = 2;

  function handleChooseOption(quantity) {
    setChooseOther(false);
    setChoosenQuantity(quantity);
  }

  function handleChooseOrther() {
    setChooseOther(true);
    setChoosenQuantity("");
  }

  return (
    <div className="quizCustomizeContainer">
      <h2>How Many Questions?</h2>
      <ul>
        {questionsQuantityOptions.map((quatity) => (
          <QuatityCard
            quatity={quatity}
            key={quatity}
            onChooseQuantity={handleChooseOption}
            choosenQuantity={choosenQuantity}
          />
        ))}
      </ul>

      <div className="otherSelectContainer">
        <Button
          type={isChooseOther ? "chooseSelect" : "choose"}
          onClick={handleChooseOrther}
        >
          Other Quantity
        </Button>
        {isChooseOther && (
          <input
            type="number"
            min={MIN_QUIZ_QUESTION}
            value={choosenQuantity}
            onChange={(e) => setChoosenQuantity(+e.target.value)}
          />
        )}
      </div>

      {!choosenQuantity === false && (
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
