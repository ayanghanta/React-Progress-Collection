import styles from "./Loader.module.css";
import useGemini from "../hooks/useGemini";
import { useEffect } from "react";

function Loader() {
  const { question } = useGemini();
  console.log(question);
  return (
    <div className={styles.loaderContainer}>
      <span className={styles.loader}></span>
      <p>Your Quiz is Being Prepared</p>
    </div>
  );
}

export default Loader;
