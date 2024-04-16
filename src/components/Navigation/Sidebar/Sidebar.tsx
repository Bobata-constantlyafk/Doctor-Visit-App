// components/Navbar.tsx

import Link from "next/link";
import styles from "./Sidebar.module.scss";
import navStyles from "src/components/Navigation/Navbar/Navbar.module.scss";
import { handleLogoClick,fetchUser,handleMenuClick,getSidebarStyle } from "~/utils/functions";
import { User } from "@supabase/supabase-js";
import { useEffect, useState } from "react";




const Sidebar: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarStyle = getSidebarStyle(isSidebarOpen);

  useEffect(() => {
    void fetchUser(setUser);
  },[]);
  
  return (
    <header className={navStyles.global}>
    <div className={styles.navbarHeader}>
    <img
          className={styles.logo}
          src="ocho.png"
          alt="ЛОГО"
          onClick={handleLogoClick}
        />
        
        <img className={styles.navMenu}
        id="menuBtn"
        src="menu.png"
        alt="МЕНЮ"
        onClick={() => handleMenuClick(setIsSidebarOpen)}
        />
    </div>
    <nav className={styles.sidebarMain} style={sidebarStyle} id="sidebar">
    <ul>
      <li>
          <Link href="/" onClick={() => setIsSidebarOpen(false)}>Главна Страница</Link>
        </li>
        <li>
          <Link href="/tablo" onClick={() => setIsSidebarOpen(false)}>Табло</Link>
        </li>
        <li>
          <Link href="/propusnati" onClick={() => setIsSidebarOpen(false)}>Пропуснати</Link>
        </li>
        <li>
          <Link href="/chasove" onClick={() => setIsSidebarOpen(false)}>Работно време</Link>
        </li>
      </ul>
      </nav>
    
    </header>
  );
};

export default Sidebar;
