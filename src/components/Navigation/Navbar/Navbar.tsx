import Link from "next/link";
import { useEffect, useState } from "react"; // Import useState and useEffect
import styles from "./Navbar.module.scss";
import { User } from "@supabase/supabase-js";
import { handleLogoClick } from "~/utils/functions";
import { fetchUser } from "~/utils/functions";

const Navbar: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Use useEffect to fetch user info when the component mounts
    void fetchUser(setUser); // Call the fetchUser function
  }, []);

  return (
    <header className={styles.global}>
      <div className={styles.navbarHeader}>
        <img
          className={styles.logo}
          src="ocho.png"
          alt="ЛОГО"
          onClick={handleLogoClick}
        />
        <nav className={styles.navbarContainer}>
          <ul className={styles.nav__links}>
            <li>
              <Link href="/">Начало</Link>
              {/* {user ? (
                <>
                  <Link href="/tablo">Табло</Link>
                  <Link href="/propusnati">Пропуснати</Link>
                </>
              ) : null} */}
              <Link href="/tablo">Табло</Link>
              <Link href="/propusnati">Пропуснати</Link>
              <Link href="/chasove">Работно време</Link>
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
