import styles from "./Loader.module.css";
import useGemini from "../hooks/useGemini";

function Loader() {
  const { question } = useGemini();
  // console.log(question?.question);
  return (
    <div className={styles.loaderContainer}>
      <span className={styles.loader}></span>
      <p>Your Quiz is Being Prepared</p>
    </div>
  );
}

export default Loader;
