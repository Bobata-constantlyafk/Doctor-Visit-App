import React from 'react'
import styles from './Footer.module.scss'

const Footer: React.FC = () => {
    return (
      <div className={styles.footer}>
        <div className={styles.info}>
          <p>© 2024 | MAX Vision medical eye care</p>
          <p>Очен кабинет д-р Пръвчев Оптика</p>
        </div>
        <div className={styles.address}>
          <p>Ж.К. Св. Иван Рилски, Бл. 25, Вход Г-Д</p>
          <p>9009 Варна</p>
        </div>
        <p className={styles.phoneNr}>
          Тел. номер: <br /> 0 800 123 456
        </p>
      </div>
    );
}

export default Footer;