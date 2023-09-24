import React from "react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import supabase from "~/constants/supaClient";
import styles from "~/components/Login/Login.module.scss";

export default function SupaBase() {
  return (
    <div className={styles.loginMain}>
      <div style={{ width: "25%", marginTop: "5vw" }}>
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          providers={["google"]}
        />
      </div>
    </div>
  );
}
