import Button from "./Button";
import styles from "./StartQuiz.module.css";

function StartQuiz() {
  return (
    <div className={styles.startQuiz}>
      <h2>15 questions is ready to test your Topic mastery</h2>
      <Button type="start">Start Quiz</Button>
    </div>
  );
}

export default StartQuiz;
