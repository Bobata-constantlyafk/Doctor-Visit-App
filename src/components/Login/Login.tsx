import React, { useState, FC } from "react";
import { useRouter } from "next/router";
import supabase from "~/constants/supaClient";
import styles from "./Login.module.scss";

const Login: FC = ({}) => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setError(error.message);
      } else {
        router.push("/tablo");
        window.location.reload();
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
    console.log("handleLogin");
  };

  return (
    <div className={styles.loginMain}>
      <div className={styles.login}>
        <h1>Вход</h1>
        {error && (
          <p>
            {error} <br />
            Невалиднa парола или емайл
          </p>
        )}
        <input
          type="email"
          placeholder="Емайл"
          className={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Парола"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Вход</button>
      </div>
    </div>
  );
};

export default Login;
