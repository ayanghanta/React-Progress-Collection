import styles from "./Header.module.css";
import Logo from "./Logo";
function Header() {
  return (
    <header className={styles.headerContainer}>
      <Logo />
      <nav>
        <ul>
          <li>About us</li>
          <li>LeaderBord</li>
          <li>Profile</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
