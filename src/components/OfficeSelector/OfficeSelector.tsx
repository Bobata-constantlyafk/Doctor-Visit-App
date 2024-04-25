import React from "react";
import { useState } from "react";
import { useGlobalContext } from "~/utils/store";
import DateBookingManager from "~/components/DateBookingManager";
import InfoForm from "~/components/InfoForm";
import styles from "./OfficeSelector.module.scss";



const OfficeSelector: React.FC = () => {
    const {calendarState, setCalendarState, isSelectionMade, setIsSelectionMade} = useGlobalContext();
    const [showCalendar, setShowCalendar] = useState(false);
    const [selectedType, setSelectedType] = useState("");
    const [selectedAge, setSelectedAge] = useState("");

    console.log("office: " + calendarState);
    console.log("selection made: " + isSelectionMade);
    const handleFormSubmission = (choiceType: string, choiceAge: string) => {
        setShowCalendar(true);
        setSelectedType(choiceType);
        setSelectedAge(choiceAge);
      };

    const handleClick = (office:string) => {
        if (office === "Varna") {
          setCalendarState(1);
        } else{
            setCalendarState(2);
        }
        setIsSelectionMade(true);
      };
    
    return (
    <>
    {!isSelectionMade ? (<div className={styles.officeSelectorMain}>
    <h1 className={styles.officeSelectorTitle}>Моля Изберете Офис</h1>
    <button className={styles.officeSelectorButton1} onClick={() => handleClick("Varna")}><p className={styles.buttonTextMain}>Офис Варна</p><p className={styles.buttonTextSec}>пон-четв</p></button>
    <button className={styles.officeSelectorButton2} onClick={() => handleClick("Sovorovo")}><p className={styles.buttonTextMain}>Офис Соворово</p><p className={styles.buttonTextSec}>петък</p></button>
    </div>) : (<div>
        {showCalendar ? (
            <DateBookingManager />
          ) : (
            <InfoForm onFormSubmit={handleFormSubmission} />
          )}
    </div>)}
    </>  
    );
};

export default OfficeSelector;