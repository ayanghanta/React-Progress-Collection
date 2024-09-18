import { useQuiz } from "../context/QuizContext";
import Button from "./Button";
import styles from "./ScoreBord.module.css";

function ScoreBord() {
  const { totalPoint, dispatch, allQuestions } = useQuiz();

  const maxPoint = allQuestions.reduce(
    (acc, curr) => (acc = acc + curr.points),
    0
  );
  const percent = Math.floor((totalPoint / maxPoint) * 100);

  let emoji;
  if (percent > 0 && percent <= 10) emoji = "😧";
  if (percent > 10 && percent <= 30) emoji = "🫤";
  if (percent > 30 && percent <= 60) emoji = "🤨";
  if (percent > 60 && percent <= 90) emoji = "🤩";
  if (percent > 90) emoji = "😎🏆";

  return (
    <div className={styles.scoreBord}>
      <p>
        {emoji} you Score {totalPoint} out of {maxPoint} ( {percent}% )
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
