"use client";
import React, { ChangeEvent } from "react";
import styles from "./InfoForm.module.scss";
import { useGlobalContext } from "~/utils/store";
import { checkPatientAppointments } from "~/utils/functions";
import { useEffect,useState } from "react";


interface InfoFormProps {
  onFormSubmit: (choiceType: string, age_range: string) => void;
}

const InfoForm: React.FC<InfoFormProps> = ({ onFormSubmit }) => {

  const [secAppointmentActive, setSecAppointmentActive] = useState(false);
  // State variables for form inputs
  const {
    name,
    setName,
    lastName,
    setLastName,
    phoneNumber,
    setPhoneNumber,
    age_range,
    setAge_range,
    typeEye,
    setTypeEye,
  } = useGlobalContext();

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
      !!name && isValidPhoneNumber(phoneNumber) && !!age_range && !!typeEye
    );
  };
  
  
  useEffect(() => {
   void checkPatientAppointments(phoneNumber,setSecAppointmentActive);
  })
  
  return (
    <div className={styles.infoMain}>
      <div className={styles.infoContainer}>
        <h1>Запази час</h1>
        <div>
          <label htmlFor="name">Име:</label>
          <input
            type="text"
            placeholder="Моля, въведете име"
            id="name"
            value={name}
            onChange={(e) => handleInputChange(e, setName)}
          />
        </div>
        <div>
          <label htmlFor="name">Фамилия:</label>
          <input
            type="text"
            placeholder="Моля, въведете фамилия"
            id="lastName"
            value={lastName}
            onChange={(e) => handleInputChange(e, setLastName)}
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">Тел номер:</label>
          <input
            type="tel"
            placeholder="Моля, въведете телефонен номер"
            id="phoneNumber"
            value={phoneNumber}
            pattern="[0-9]*"
            inputMode="tel"
            onChange={(e) => handleInputChange(e, setPhoneNumber)}
          />
        </div>
        <div>
          <label htmlFor="age_range">Възраст:</label>
          <select
            className="ageSelection"
            id="age_range"
            value={age_range}
            onChange={(e) => handleChoiceChange(e, setAge_range)}>
            <option value="" disabled>
              Изберете възрастова група
            </option>
            <option value="Pod">Под 25</option>
            <option value="Nad">Над 25</option>
          </select>
        </div>
        <div>
          <label htmlFor="choiceType">Вид преглед:</label>
          <select
            className="examinationType"
            id="typeEye"
            value={typeEye}
            onChange={(e) => handleChoiceChange(e, setTypeEye)}>
            <option value="" disabled>
              Моля, изберете подходящият преглед
            </option>
            <option value="Purvichen">Първичен преглед</option>
            {secAppointmentActive ? <option value="Vtorichen">Вторичен преглед</option>
              : <option value="Vtorichen" disabled>Вторичен преглед</option>}
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
            onFormSubmit(typeEye, age_range);
          }}>
          Напред →
        </button>
      </div>
    </div>
  );
};

export default InfoForm;
