import Button from "./Button";
import styles from "./SelectQuantity.module.css";

const questionsQuantityOptions = [5, 10, 15, 20];

function SelectQuantity({ dispatch }) {
  return (
    <div className="quizCustomizeContainer">
      <h2>How Many Questions?</h2>
      <ul>
        {questionsQuantityOptions.map((quatity) => (
          <QuatityCard quatity={quatity} key={quatity} />
        ))}
      </ul>
      <Button
        type="next"
        onClick={() => dispatch({ type: "quantitySelected" })}
      >
        next &rarr;
      </Button>
    </div>
  );
}

function QuatityCard({ quatity }) {
  return <li>{quatity}</li>;
}

export default SelectQuantity;
