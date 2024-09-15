import React from 'react'
import styles from './Footer.module.scss'

const Footer: React.FC = () => {
    return (
      <div className={styles.footer}>
        <div className={styles.footerLeft}>
          <p>© 2024 | MAX Vision medical eye care</p>
          <p>Очен кабинет д-р Пръвчев Оптика</p>
        </div>
        <div className={styles.footerMiddle}>
          <p>Ж.К. Св. Иван Рилски, Бл. 25, Вход Г-Д</p>
          <p>9009 Варна</p>
        </div>
        <div className={styles.footerRight}>
          <p className={styles.phoneNr}>Тел. номер: 0800 123 456</p>
          <p
            onClick={() => (window.location.href = "/poveritelnost")}
            className={styles.footerPoveritelnost}>
            Политика за поверителност
          </p>
        </div>
      </div>
    );
}

export default Footer;