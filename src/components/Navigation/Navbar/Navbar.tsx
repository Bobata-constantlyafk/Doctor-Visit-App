import Link from "next/link";
import styles from "./Navbar.module.scss";

const Navbar: React.FC = () => {
  return (
    <header className={styles.global}>
      <div className={styles.navbarHeader}>
        <img className={styles.logo} src="ocho.png" alt="logo " />
        <nav className={styles.navbarContainer}>
          <ul className={styles.nav__links}>
            <li>
              <Link href="/">Начало</Link>
              <Link href="/tablo">Табло</Link>
              <Link href="/propusnati">Пропуснати</Link>
            </li>
          </ul>
        </nav>
        {/* <a href="#" className={styles.cta}>
          <button className={styles.button}>Табло</button>
        </a> */}
      </div>
    </header>
  );
};

export default Navbar;
