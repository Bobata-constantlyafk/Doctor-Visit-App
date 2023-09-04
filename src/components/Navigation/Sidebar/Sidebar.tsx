// components/Navbar.tsx

import Link from "next/link";
import styles from "./Navbar.module.scss";

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          {/* <a>Logo</a> */}
          <p>pi</p>
        </Link>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <Link href="/about">{/* <a>About</a> */}</Link>
        </li>
        <li>
          <Link href="/services">{/* <a>Services</a> */}</Link>
        </li>
        <li>
          <Link href="/contact">{/* <a>Contact</a> */}</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
