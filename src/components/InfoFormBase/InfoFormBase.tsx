import React, { useState, ChangeEvent, useEffect } from "react";
import styles from "./InfoFormBase.module.scss";
import {
  createAppointmentFunc,
  getExistingAppointments,
} from "~/utils/functions";

interface InfoFormBaseProps {
  appoinmentDateTime: Date;
  closeModal: () => void;
  getAllAppointments: () => Promise<void>;
}

const InfoFormBase: React.FC<InfoFormBaseProps> = ({
  appoinmentDateTime,
  closeModal,
  getAllAppointments,
}) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [age_range, setAge_range] = useState<string>("");
  const [typeEye, setTypeEye] = useState<string>("");
  // A-1 Ask GPT why the set won't work
  // A-2 Add filtering to only do this for under 25 parvichen appointments? Maybe idk if I even need to do this.
  // A-3 Add comments
  // A-4 use minutes ahead and extra minutes ahead
  // const [timeBetweenNextAppointment, setTimeBetweenNextAppointment] =
  //   useState<string>("nuthin");
  let timeBetweenNextAppointment: string = "nuthin";
  const [existingAppointments, setExistingAppointments] = useState<Date[]>([]);
  const addMinutesAhead = 80;
  const addExtraMinutesAhead = addMinutesAhead + 20;

  useEffect(() => {
    getExistingAppointments(appoinmentDateTime, typeEye, age_range)
      .then((existingAppointments) => {
        setExistingAppointments(existingAppointments);
      })
      .catch((error) => {
        console.error("Error in fetchExistingAppointments:", error);
      });
  }, [appoinmentDateTime, typeEye, age_range]);

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
    await getTimeBetween();
    console.log("Time Between Next App: " + timeBetweenNextAppointment);
    void createAppointmentFunc(
      appoinmentDateTime,
      age_range,
      typeEye,
      name,
      lastName,
      phoneNumber,
      timeBetweenNextAppointment
    );

    closeModal();

    await new Promise((resolve) => setTimeout(resolve, 2000));

    await getAllAppointments();
  };

  function getTimeBetween() {
    const check1H20 = existingAppointments.some((existingAppointment) => {
      const timeDifference =
        existingAppointment.getTime() - appoinmentDateTime.getTime();
      const minutesDifference = timeDifference / (1000 * 60); // Convert milliseconds to minutes
      return minutesDifference === addMinutesAhead;
    });

    const check1H40 = existingAppointments.some((existingAppointment) => {
      const timeDifference =
        existingAppointment.getTime() - appoinmentDateTime.getTime();
      const minutesDifference = timeDifference / (1000 * 60); // Convert milliseconds to minutes
      return minutesDifference === addExtraMinutesAhead;
    });

    switch (true) {
      case !check1H20:
        timeBetweenNextAppointment = "1h20";
        break;

      case !check1H40:
        timeBetweenNextAppointment = "1h40";
        break;

      case check1H20 && check1H40:
        timeBetweenNextAppointment = "both";
        break;

      default:
        timeBetweenNextAppointment = "none";
        console.log("none");
        break;
    }
  }

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
