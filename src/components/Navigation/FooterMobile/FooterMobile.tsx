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
          <br /> 0889 433 995{" "}
        </p>
      </div>

      <div className={styles.poveritelnost}>
        <p
          onClick={() => (window.location.href = "/poveritelnost")}
          className={styles.footerPoveritelnost}>
          Политика за поверителност
        </p>
      </div>
    </div>
  );
};

export default FooterMobile;
