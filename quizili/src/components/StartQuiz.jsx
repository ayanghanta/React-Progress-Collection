import { useQuiz } from "../context/QuizContext";
import Button from "./Button";
import styles from "./StartQuiz.module.css";

function StartQuiz() {
  const { allQuestions, quizTopic, dispatch } = useQuiz();

  return (
    <div className={styles.startQuiz}>
      <h2>
        {allQuestions.length} questions is ready to test your {quizTopic}{" "}
        mastery
      </h2>
      <Button type="start" onClick={() => dispatch({ type: "startQuiz" })}>
        Start Quiz
      </Button>
    </div>
  );
}

export default StartQuiz;
