import styles from "./Loader.module.css";
import useGemini from "../hooks/useGemini";

function Loader({
  topic,
  numQuestions,
  diffLabel,
  poinstPerQuestion,
  dispatch,
}) {
  const { question } = useGemini(
    topic,
    numQuestions,
    diffLabel,
    poinstPerQuestion,
    dispatch
  );
  console.log(question);
  return (
    <div className={styles.loaderContainer}>
      <span className={styles.loader}></span>
      <p>Your Quiz is Being Prepared</p>
    </div>
  );
}

export default Loader;
