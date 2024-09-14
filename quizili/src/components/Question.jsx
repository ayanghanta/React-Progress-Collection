import Button from "./Button";

import styles from "./Question.module.css";
function Question({ question, answer, dispatch }) {
  function showCorrentOption(index, correctOption) {
    if (answer === null) return "";
    return index + 1 === correctOption ? "right" : "wrong";
  }

  return (
    <div className={styles.questionContainer}>
      <h2>{question.question}</h2>
      <div className={styles.optionsContainer}>
        {question.options.map((option, i) => (
          <button
            className={`optionBtn ${showCorrentOption(
              i,
              question.correctOption
            )} ${i + 1 === answer ? "selectedOption" : ""}`}
            key={option}
            onClick={() => dispatch({ type: "giveAnswer", payload: i + 1 })}
            disabled={answer !== null}
          >
            {option}
          </button>
        ))}
      </div>
      <div>
        <Button type="next" onClick={() => dispatch({ type: "nextQuestion" })}>
          Next Question &rarr;
        </Button>
      </div>
    </div>
  );
}

export default Question;
