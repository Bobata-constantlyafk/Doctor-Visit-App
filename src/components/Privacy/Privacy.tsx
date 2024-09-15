import { FC } from "react";
import styles from "./Privacy.module.scss";

const Privacy: FC = () => {
  return (
    <div className={styles.privacyMain}>
      <div className={styles.privacyRight} />
      <div className={styles.privacyMiddle}>
        <div className={styles.privacyHeading}>
          <h1>Политика за поверителност</h1>
          <p>
            {" "}
            Екипът се грижи за поверителността на потребителите и за защитата на
            личните им данни. Целта на политиката за поверителност е да
            информира как и защо се обработват личните данни в контекста на този
            сайт. Моля, прочетете внимателно тази политика за поверителност
            преди да използвате нашите услуги.
          </p>
        </div>

        <div>
          <h2>Какви данни събираме</h2>
          <p>
            В пълно съответствие с регламентите на GDPR, ние събираме само
            данните, които са строго необходими за насрочване на часове и
            предоставяне на здравните услуги, от които се нуждаете. Изрично, не
            събираме допълнителна информация за потребителско поведение при
            сърфиране, маркетингови предпочитания или аналитични данни за
            проследяване. Ограничаваме събирането на данни единствено до това,
            което е необходимо за предоставянето и подобряването на нашите
            услуги, а именно:
          </p>
          <ul>
            <li>Име</li>
            <li>Фамилия</li>
            <li>ЕГН</li>
            <li>Телефонен номер</li>
          </ul>
        </div>

        <div>
          <h2>Защо събираме данни</h2>
          <ul>
            <li>
              Вашето име, фамилия и ЕГН са необходими, за да ви идентифицираме
              като индивидуален потребител.
            </li>
            <li>
              ЕГН се изисква от системата на Д-р Пръвчев за точна идентификация
              на пациентите.
            </li>
            <li>
              Вашият телефонен номер се събира с цел обратна връзка с вас,
              включително за потвърждаване на запазен час чрез СМС или телефонно
              обаждане.
            </li>
          </ul>
        </div>

        <div>
          <h2>Достъп до данните</h2>
          <p>
            Данните, които събираме, не се споделят с трети лица, освен с тези,
            които участват в нейното обработване и се използва единствено за
            целите на предоставянето на здравни услуги.
          </p>
        </div>

        <div>
          <h2>Политика за защита на данните на трети лица</h2>
          <ul>
            <li>
              <a href="https://www.netlify.com/privacy/" target="_blank">
                Netlify
              </a>
            </li>
            <li>
              <a href="https://supabase.com/privacy" target="_blank">
                Supabase
              </a>
            </li>
            <li>
              <a href="https://dr-pravchev.netlify.app/" target="_blank">
                Dr. Pravchevs EGN software
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2>За колко време пазиме данните</h2>
          <p>
            Съхраняваме вашите данни само за периода, необходим за
            предоставянето на нашите услуги, и в съответствие с регламентите на
            GDPR изтриваме данните, ако не са били използвани в последните 24
            месеца.
          </p>
        </div>

        <div>
          <h2>Къде се съхраняват данните</h2>
          <p>
            Вашите данни се съхраняват сигурно в облачните сървъри на Supabase,
            което използва криптирани бази данни и стандарти за сигурност на
            ниво индустрия, за да гарантира защитата на информацията. Supabase
            предоставя надеждна инфраструктура за съхранение и достъп до данни с
            автоматични архиви и възстановяване при нужда, като спазва
            регламентите за защита на данните, включително GDPR.
          </p>
        </div>

        <div>
          <h2>Защита на данните</h2>
          <p>
            Ние предприемаме всички известни мерки за защита на данните,
            включително съвременни технологии за криптиране, контрол на достъпа
            и редовни проверки за сигурност, за да осигурим максимална защита на
            вашата лична информация.
          </p>
          <p>
            Supabase използва криптиране както при предаване, така и при
            съхранение на данни, като гарантира висока степен на защита.
            Допълнителни мерки за сигурност включват многофакторна автентикация
            и регулярни проверки за уязвимости, осигуряващи максимална защита на
            вашата информация.
          </p>
        </div>

        <div>
          <h2>Право на отказ от съхранение на данни</h2>
          <p>
            Вие имате право да се откажете от съхранението на вашите данни по
            всяко време. За да упражните това право, моля, изпратете имейл на
            doctorPravchev@email.com, като посочите кой желае да се отпише и
            причината за отказа. Също така можете да се свържете с нас по
            телефон на номер 0800 123 456.
          </p>
        </div>
      </div>
      <div className={styles.privacyLeft} />
    </div>
  );
};

export default Privacy;
