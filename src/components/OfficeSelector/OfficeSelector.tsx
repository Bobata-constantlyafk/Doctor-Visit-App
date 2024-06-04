import React from "react";
import { useState } from "react";
import { useGlobalContext } from "~/utils/store";
import DateBookingManager from "~/components/DateBookingManager";
import InfoForm from "~/components/InfoForm";
import styles from "./OfficeSelector.module.scss";

const officeSelector: React.FC = () => {
  const {
    calendarState,
    setCalendarState,
    isSelectionMade,
    setIsSelectionMade,
  } = useGlobalContext();
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedType, setSelectedType] = useState("");
  const [selectedAge, setSelectedAge] = useState("");

  const handleFormSubmission = (choiceType: string, choiceAge: string) => {
    setShowCalendar(true);
    setSelectedType(choiceType);
    setSelectedAge(choiceAge);
  };

  const handleClick = (office: string) => {
    if (office === "Varna") {
      setCalendarState(1);
    } else {
      setCalendarState(2);
    }
    setIsSelectionMade(true);
  };

  return (
    <>
      {!isSelectionMade ? (
        <div className={styles.officeMain}>
          <h1 className={styles.officeTitle}>
            Изберете <br /> oфис
          </h1>
          <div className={styles.vl}></div>
          <div className={styles.officeRight}>
            <div className={styles.officeRow}>
              <div className={styles.officeRowTitle}>
                <h1>Варна</h1>
                <p>Пон-Четв</p>
              </div>

              <img
                src="varna.png"
                alt="Варна"
                onClick={() => handleClick("Varna")}
              />
            </div>
            <div className={styles.officeRow}>
              <div className={styles.officeRowTitle}>
                <h1>Суворово</h1>
                <p>Петък</p>
              </div>
              <img
                src="suvorovo.jpg"
                alt="Суворово"
                onClick={() => handleClick("Suvorovo")}
              />
            </div>
          </div>

          {/* <button
              className={styles.officeButton1}
              onClick={() => handleClick("Varna")}>
              <p className={styles.buttonTextSec}>пон-четв</p>
            </button>
            <button
              className={styles.officeButton2}
              onClick={() => handleClick("Suvorovo")}>
              <p className={styles.buttonTextSec}>петък</p>
            </button> */}
        </div>
      ) : (
        <div>
          {showCalendar ? (
            <DateBookingManager />
          ) : (
            <InfoForm onFormSubmit={handleFormSubmission} />
          )}
        </div>
      )}
    </>
  );
};

export default officeSelector;