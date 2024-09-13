import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy;{new Date().getFullYear()} Quizili. All rights reserved.</p>
      <p>
        Made with 💙 by <a href="https://x.com/im_ayangh">Ayan</a>
      </p>
    </footer>
  );
}

export default Footer;
