import React from "react";
import { useRouter } from "next/router";
import styles from "./Logout.module.scss";
import supabase from "~/constants/supaClient";

const Logout = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();

      if (error) {
        console.error("Error during logout:", error);
      } else {
        void router.push("/");
        window.location.reload();
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <div className={styles.loginMain}>
      <div className={styles.login}>
        <button onClick={void handleLogout}>Изход</button>
      </div>
    </div>
  );
};

export default Logout;
