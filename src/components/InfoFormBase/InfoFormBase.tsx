import React, { useState, ChangeEvent } from "react";
import styles from "./InfoFormBase.module.scss";
import { createAppointmentFunc } from "~/utils/functions";

interface InfoFormBaseProps {
  appoinmentDateTime: Date;
  closeModal: () => void;
  fetchAppointments: () => Promise<void>;
}

const InfoFormBase: React.FC<InfoFormBaseProps> = ({
  appoinmentDateTime,
  closeModal,
  fetchAppointments,
}) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [age_range, setAge_range] = useState<string>("");
  const [typeEye, setTypeEye] = useState<string>("");

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setter(e.target.value);
  };

  const handleChoiceChange = (
    e: ChangeEvent<HTMLSelectElement>,
    setter: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setter(e.target.value);
  };

  const onFormSubmit = async (
    typeEye: string,
    age_range: string
  ): Promise<void> => {
    void createAppointmentFunc(
      appoinmentDateTime,
      age_range,
      typeEye,
      name,
      lastName,
      phoneNumber
    );

    closeModal();

    await new Promise((resolve) => setTimeout(resolve, 2000));

    await fetchAppointments();
  };

  return (
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
          placeholder="Моля, въведете телефонен номер "
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
          <option value="Vtorichen">Вторичен преглед</option>
        </select>
      </div>
      <button
        type="button"
        onClick={() => void onFormSubmit(typeEye, age_range)}>
        Напред →
      </button>
    </div>
  );
};

export default InfoFormBase;
