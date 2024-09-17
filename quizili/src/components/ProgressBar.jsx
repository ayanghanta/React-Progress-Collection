import { useQuiz } from "../context/QuizContext";
import styles from "./ProgressBar.module.css";

function ProgressBar() {
  const { allQuestions, poinstPerQuestion, totalPoint, index, answer } =
    useQuiz();
  const maxValue = allQuestions.length;
  const maxPossiblePoints = maxValue * poinstPerQuestion;

  return (
    <div className={styles.progressContainer}>
      <progress
        max={maxValue}
        value={answer === null ? index : index + 1}
        className={styles.progress}
      />
      <p>
        Questions:
        <strong>
          {index + 1}/{maxValue}
        </strong>
      </p>
      <p>
        Points:
        <strong>
          {totalPoint}/{maxPossiblePoints}
        </strong>
      </p>
    </div>
  );
}

export default ProgressBar;
