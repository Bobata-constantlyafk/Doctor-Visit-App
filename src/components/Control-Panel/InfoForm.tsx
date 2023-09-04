import React, { useState, ChangeEvent } from "react";
import styles from "./Tablo.module.scss";
import { log } from "console";
import supabase from "../../constants/supaClient.js";

interface InfoFormProps {
  onFormSubmit: (choice: string) => void;
}

const InfoForm: React.FC<InfoFormProps> = ({ onFormSubmit }) => {
  // State variables for form inputs
  const [name, setName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [choiceAge, setChoiceAge] = useState<string>("");
  const [choiceEye, setChoiceEye] = useState<string>("");

  // Handle changes for input fields
  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement>,
    setState: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setState(event.target.value);
  };

  // Handle changes for dropdowns
  const handleChoiceChange = (
    event: ChangeEvent<HTMLSelectElement>,
    setState: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setState(event.target.value);
  };

  // Validate phone number format
  const isValidPhoneNumber = (phoneNumber: string): boolean => {
    const phoneRegex = /^(0\d{9}|(\+\d{10,12}))$/;
    return phoneRegex.test(phoneNumber);
  };

  // Check if the entire form is valid
  const isFormValid = (): boolean => {
    return (
      !!name && isValidPhoneNumber(phoneNumber) && !!choiceAge && !!choiceEye
    );
  };

  function logVars() {
    console.log("Name: ", name);
    console.log("Numbah: ", phoneNumber);
    console.log("Age: ", choiceAge);
  }

  return (
    <div className={styles.infoMain}>
      <div className={styles.infoContainer}>
        <h1>Информация</h1>
        <div>
          <label htmlFor="name">Име:</label>
          <input
            type="text"
            placeholder="Моля въведете си името"
            id="name"
            value={name}
            onChange={(e) => handleInputChange(e, setName)}
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">Тел номер:</label>
          <input
            type="tel"
            placeholder="Моля въведете си номера"
            id="phoneNumber"
            value={phoneNumber}
            pattern="[0-9]*"
            inputMode="tel"
            onChange={(e) => handleInputChange(e, setPhoneNumber)}
          />
        </div>
        <div>
          <label htmlFor="choiceAge">Възраст:</label>
          <select
            className="ageSelection"
            id="choiceAge"
            value={choiceAge}
            onChange={(e) => handleChoiceChange(e, setChoiceAge)}>
            <option value="" disabled>
              Изберете възрастова група
            </option>
            <option value="Nad">Над 25</option>
            <option value="Pod">Под 25</option>
          </select>
        </div>
        <div>
          <label htmlFor="choice">Вид преглед:</label>
          <select
            className="examinationType"
            id="choiceEye"
            value={choiceEye}
            onChange={(e) => handleChoiceChange(e, setChoiceEye)}>
            <option value="" disabled>
              Моля, изберете подходящият преглед
            </option>
            <option value="Purvichen">Първичен преглед</option>
            <option value="Vtorichen">Вторичен преглед</option>
          </select>
        </div>
        <button
          type="button"
          // disabled={!isFormValid()}
          onClick={() => {
            // if (isFormValid()) {
            //   logVars();
            //   onFormSubmit();
            // }
            onFormSubmit(choiceEye), logVars();
          }}>
          Напред →
        </button>
      </div>
    </div>
  );
};

export default InfoForm;
