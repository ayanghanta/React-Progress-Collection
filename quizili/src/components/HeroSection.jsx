import styles from "./HeroSection.module.css";
function HeroSection() {
  return (
    <div className={styles.heroSection}>
      <h1>Quizili: AI-Powered Quizzes for Every Mind</h1>
      <p>
        Experience tailored quizzes that challenge and engage. Our AI algorithm
        delivers the perfect quizzes just for you.
      </p>
    </div>
  );
}

export default HeroSection;
