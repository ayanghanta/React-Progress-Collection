import Button from "./Button";
import styles from "./ScoreBord.module.css";
function ScoreBord({ totalPoint, maxPoint, dispath }) {
  const percent = Math.round((totalPoint / maxPoint) * 100);
  return (
    <div className={styles.scoreBord}>
      <p>
        you Score {totalPoint} out of {maxPoint} [{percent}%]
      </p>
      <div className={styles.btnsContainer}>
        <Button type="next" onClick={() => dispath({ type: "quizRestart" })}>
          Restart Quiz
        </Button>
        <Button type="next" onClick={() => dispath({ type: "home" })}>
          Home
        </Button>
      </div>
    </div>
  );
}

export default ScoreBord;
