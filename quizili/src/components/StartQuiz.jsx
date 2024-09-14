import Button from "./Button";
import styles from "./StartQuiz.module.css";

function StartQuiz({ numQuizQuestion, topic, dispatch }) {
  return (
    <div className={styles.startQuiz}>
      <h2>
        {numQuizQuestion} questions is ready to test your {topic} mastery
      </h2>
      <Button type="start" onClick={() => dispatch({ type: "startQuiz" })}>
        Start Quiz
      </Button>
    </div>
  );
}

export default StartQuiz;
