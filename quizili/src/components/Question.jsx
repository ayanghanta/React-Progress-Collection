import Button from "./Button";

import styles from "./Question.module.css";
function Question({ question, answer, dispatch, index, totalQuestions }) {
  // console.log(question);

  function showCorrentOption(index, correctOption) {
    if (answer === null) return "";
    return index === correctOption ? "right" : "wrong";
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
            )} ${i === answer ? "selectedOption" : ""}`}
            key={option}
            onClick={() => dispatch({ type: "giveAnswer", payload: i })}
            disabled={answer !== null}
          >
            {option}
          </button>
        ))}
      </div>
      <div>
        {answer !== null && index + 1 !== totalQuestions && (
          <Button
            type="next"
            onClick={() => dispatch({ type: "nextQuestion" })}
          >
            Next Question &rarr;
          </Button>
        )}
        {answer !== null && index + 1 === totalQuestions && (
          <Button type="next" onClick={() => dispatch({ type: "finishQuiz" })}>
            Finish Quiz
          </Button>
        )}
      </div>
    </div>
  );
}

export default Question;
