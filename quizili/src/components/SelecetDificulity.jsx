import Button from "./Button";

const difficilityOptions = ["Easy", "Medium", "Hard"];

function SelecetDificulity({ dispatch }) {
  return (
    <div className="quizCustomizeContainer">
      <h2>Select Quiz Difficulty</h2>
      <ul>
        {difficilityOptions.map((label) => (
          <DificilityCard label={label} key={label} />
        ))}
      </ul>
      <Button
        type="next"
        onClick={() => dispatch({ type: "difficulitySelected" })}
      >
        next &rarr;
      </Button>
    </div>
  );
}

function DificilityCard({ label }) {
  return <li>{label}</li>;
}

export default SelecetDificulity;
