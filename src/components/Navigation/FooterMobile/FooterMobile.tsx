import React from "react";
import styles from "./FooterMobile.module.scss";

const FooterMobile: React.FC = () => {
  return (
    <div className={styles.footer}>
      <div>
        <p>
          Ж.К. Св. Иван Рилски,
          <br /> Бл. 25, Вход Г-Д,
          <br /> 9009 Варна
        </p>
      </div>

      <div className={styles.phoneNr}>
        <p>
          {" "}
          Тел. номер:
          <br /> 0 800 123 456{" "}
        </p>
      </div>
    </div>
  );
};

export default FooterMobile;
