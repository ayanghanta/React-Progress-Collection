import { useQuiz } from "../context/QuizContext";
import Button from "./Button";
import styles from "./ScoreBord.module.css";
function ScoreBord() {
  const { totalPoint, dispatch, allQuestions } = useQuiz();

  const maxPoint = allQuestions.reduce(
    (acc, curr) => (acc = acc + curr.points),
    0
  );
  const percent = Math.round((totalPoint / maxPoint) * 100);

  return (
    <div className={styles.scoreBord}>
      <p>
        you Score {totalPoint} out of {maxPoint} [{percent}%]
      </p>
      <div className={styles.btnsContainer}>
        <Button type="next" onClick={() => dispatch({ type: "quizRestart" })}>
          Restart Quiz
        </Button>
        <Button type="next" onClick={() => dispatch({ type: "home" })}>
          Home
        </Button>
      </div>
    </div>
  );
}

export default ScoreBord;
