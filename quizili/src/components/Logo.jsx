import styles from "./Logo.module.css";
function Logo() {
  return (
    <img
      src="logo.png"
      alt="quizili application logo"
      className={styles.logo}
    />
  );
}

export default Logo;
