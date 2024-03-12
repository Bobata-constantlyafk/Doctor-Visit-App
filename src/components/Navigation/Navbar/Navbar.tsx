import Link from "next/link";
import { useEffect, useState } from "react"; // Import useState and useEffect
import styles from "./Navbar.module.scss";
import supabase from "~/constants/supaClient";
import { User } from "@supabase/supabase-js";

const Navbar: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Use useEffect to fetch user info when the component mounts
    const fetchUser = async () => {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();

      if (error) {
        console.error("Error fetching user:", error);
      } else {
        setUser(user);
      }
    };

    void fetchUser(); // Call the fetchUser function
  }, []);

  const handleLogoClick = () => {
    window.location.reload();
  };

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
