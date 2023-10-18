import React, { useState, useEffect, FC, ChangeEvent, useRef } from "react";
import styles from "./Tablo.module.scss";
import supabase from "../../constants/supaClient.js";
import { User } from "@supabase/supabase-js";
import ReactModal from "react-modal";
import { createAppointmentFunc } from "~/utils/functions";
import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { formatDateToWords } from "~/utils/functions";

import {
  getHours,
  getMinutes,
  getDate,
  isSameDay,
  isSameMinute,
  setMinutes,
  setHours,
  addMinutes,
  format,
} from "date-fns";
import {
  OPENING_HOURS,
  OPENING_MINUTES,
  CLOSING_HOURS,
  CLOSING_MINUTES,
  INTERVAL,
} from "~/constants/config";

interface Appointment {
  date: Date;
  age_range?: string;
  type?: string;
  phone_nr?: string;
  name?: string;
  patient_id: number;
  Patients: { name: string; phone_nr: number; missed: boolean }[];
}
interface DateType {
  justDate: Date | null;
}
const Tablo: FC = ({}) => {
  const [date, setDate] = useState<DateType>({
    justDate: null,
  });
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [showAdditionalInfo, setShowAdditionalInfo] = useState<boolean[]>(
    appointments.map(() => false)
  );
  const [name, setName] = useState<string>("");
  const [typeEye, setTypeEye] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [age_range, setAge_range] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dateForApp, setDateForApp] = useState<Date>(new Date());
  const nameInputRef = useRef<HTMLInputElement>(null);
  const phoneNumberInputRef = useRef<HTMLInputElement>(null);
  const [focusedInput, setFocusedInput] = useState("name"); // "name" or "phoneNumber"
  const handlePhoneNumberInputClick = () => {
    setFocusedInput("phoneNumber");
  };
  const handleNameInputClick = () => {
    setFocusedInput("name");
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const monthAbbreviations = [
    "ЯН",
    "ФЕВ",
    "МАР",
    "АПР",
    "МАЙ",
    "ЮНИ",
    "ЮЛИ",
    "АВГ",
    "СЕП",
    "ОКТ",
    "НОЕМ",
    "ДЕК",
  ];

  function formatDateForCard(date: Date) {
    const day = getDate(date);
    const monthIndex = date.getMonth();
    const month = monthAbbreviations[monthIndex];

    return `${day} ${month}`;
  }

  const toggleAdditionalInfo = (index: number) => {
    const updatedInfo = [...showAdditionalInfo];

    updatedInfo[index] = !updatedInfo[index];

    setShowAdditionalInfo(updatedInfo);
  };

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handlePhoneNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.target.value);
  };

  // Handle changes for dropdowns
  const handleChoiceChange = (
    event: ChangeEvent<HTMLSelectElement>,
    setState: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setState(event.target.value);
  };

  // Update the "missed" field in the "Patients" table for the specified patient
  const handleMissedAppointment = async (
    patientId: number,
    missed_date: Date
  ): Promise<void> => {
    try {
      const { data, error } = await supabase
        .from("Patients")
        .update({ missed: true, missed_date: missed_date })
        .eq("id", patientId);

      if (error) {
        console.error("Error updating missed status:", error);
      } else {
        console.log("Missed status updated successfully");
      }
    } catch (error) {
      console.error("Error updating missed status:", error);
    }
  };

  // Update the database to delete the specified appointment
  const handleDeleteAppointment = (index: number) => {
    // Get the appointment to be deleted
    const appointmentToDelete = appointments[index];

    if (!appointmentToDelete) {
      console.error("Appointment to delete is undefined");
      return;
    }
    const utcDateToDelete = appointmentToDelete.date.toISOString();

    (
      supabase
        .from("Appointments")
        .delete()
        .eq("date", utcDateToDelete) as unknown as Promise<{
        data: Appointment;
        error: Error;
      }>
    )
      .then(({ error }) => {
        if (error) {
          console.error("Error deleting appointment:", error);
          console.log(
            "Date before sending to Supabase:",
            appointmentToDelete.date
          );
        } else {
          // Remove the appointment from the state
          const updatedAppointments = [...appointments];
          updatedAppointments.splice(index, 1);
          setAppointments(updatedAppointments);
          console.log("Appointment deleted successfully");
        }
      })
      .catch((error) => {
        console.error("Error deleting appointment:", error);
      });
  };

  useEffect(() => {
    async function getUserData() {
      await supabase.auth
        .getUser()
        .then((value) => {
          if (value.data?.user) {
            setUser(value.data.user);
            void fetchAppointments();
            console.log("User: ", value.data.user);
          }
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    }
    void getUserData();

    async function fetchAppointments() {
      const { data, error } = await supabase
        .from("Appointments")
        .select(
          "date, age_range, type, patient_id, Patients(name, phone_nr, missed)"
        )
        .order("date");
      console.log("Data: ", data);
      if (error) {
        console.error("Error fetching appointments:", error);
      } else {
        setAppointments(data);
      }
    }

    void fetchAppointments();
  }, []);

  const todaysAppointments = date.justDate
    ? appointments.filter((appointment) =>
        isSameDay(new Date(appointment.date), date.justDate!)
      )
    : [];

  const createAppointments = (): Appointment[] => {
    if (date.justDate === null) {
      return [];
    }
    const appointments: Appointment[] = [];

    const openingTime = setMinutes(
      setHours(date.justDate, OPENING_HOURS),
      OPENING_MINUTES
    );
    const closingTime = setMinutes(
      setHours(date.justDate, CLOSING_HOURS),
      CLOSING_MINUTES
    );

    for (
      let time = openingTime;
      time <= closingTime;
      time = addMinutes(time, INTERVAL)
    ) {
      const isDuplicate = todaysAppointments.some((todayAppt) =>
        isSameMinute(new Date(time), new Date(todayAppt.date))
      );

      if (!isDuplicate) {
        const appointment: Appointment = {
          date: time,
          type: "empty",
          patient_id: 0,
          Patients: [],
        };
        appointments.push(appointment);
        console.log("todays: ", todaysAppointments);
        console.log("isDuplicate: ", isDuplicate);
      }
    }

    const mergedAppointments = [...appointments, ...todaysAppointments];
    mergedAppointments.forEach((appointment) => {
      if (typeof appointment.date === "string") {
        appointment.date = new Date(appointment.date);
      }
    });
    const sortedAppointments = mergedAppointments.sort((a, b) =>
      a.date.toLocaleTimeString().localeCompare(b.date.toLocaleTimeString())
    );

    return sortedAppointments;
  };

  const updateAppointmentFunc = (
    date: Date,
    age_range: string,
    typeEye: string,
    name: string,
    phoneNumber: string
  ) => {
    const phoneNumber_parsed = parseInt(phoneNumber, 10);
    console.log("Name:", name, "Number:", phoneNumber);
    const updatedAppointment = {
      date: date,
      age_range: age_range,
      type: typeEye,
      name: name,
      phone_nr: phoneNumber,
      patient_id: 0,
      Patients: [{ name: name, phone_nr: phoneNumber_parsed, missed: false }],
    };

    // Update the local state with the new appointment
    setAppointments((prevAppointments) => [
      ...prevAppointments,
      updatedAppointment,
    ]);

    closeModal();
  };

  const allAppointments: Appointment[] = createAppointments();

  return (
    <div className={styles.tabloMain}>
      {date.justDate ? (
        <>
          {/* {user ? (
        <> */}
          <h1 className={styles.header}>{formatDateToWords(date.justDate)}</h1>
          <div className={styles.tabloCards}>
            {allAppointments.map((appointment, index) => (
              <div
                className={styles.appointmentCards}
                key={appointment.date.toString()}>
                <div
                  className={`${styles.appointmentCard} ${
                    appointment.Patients &&
                    "missed" in appointment.Patients &&
                    appointment.Patients.missed
                      ? styles.missedAppointment
                      : appointment.type === "empty"
                      ? styles.emptyAppointment
                      : ""
                  }`}>
                  <div className={styles.upperRow}>
                    <h1 className={styles.hour}>
                      {getHours(new Date(appointment.date))}:
                      {String(getMinutes(new Date(appointment.date))).padStart(
                        2,
                        "0"
                      )}
                    </h1>

                    <p>{formatDateForCard(new Date(appointment.date))}</p>
                    {appointment.type === "empty" ? (
                      <img
                        className={styles.novChas}
                        src="plus.png"
                        alt="nov-chas"
                        onClick={() => {
                          setDateForApp(appointment.date);
                          openModal();
                        }}
                      />
                    ) : (
                      <img
                        src="close.png"
                        alt=""
                        onClick={(
                          event: React.MouseEvent<HTMLImageElement, MouseEvent>
                        ) => {
                          event.preventDefault();
                          handleDeleteAppointment(
                            appointments.indexOf(appointment)
                          );
                        }}
                      />
                    )}
                  </div>
                  {appointment.type === "empty" ? (
                    <div className={styles.middleEmpty}>
                      <p>Празен</p>
                    </div>
                  ) : (
                    <div className={styles.middleRow}>
                      <p className={styles.name}>
                        {appointment.patient_id === 0
                          ? appointment.name ?? ""
                          : appointment.Patients &&
                            "name" in appointment.Patients
                          ? (appointment.Patients.name as string)
                          : ""}
                      </p>

                      <p>
                        {appointment.type === "Purvichen"
                          ? "Първичен"
                          : appointment.type === "Vtorichen"
                          ? "Вторичен"
                          : ""}
                      </p>
                      <div className={styles.toggle}>
                        <input
                          type="checkbox"
                          id={`toggle-btn-${index}`}
                          className={styles.input}
                        />
                        <label
                          htmlFor={`toggle-btn-${index}`}
                          className={styles.label}
                          onClick={() => toggleAdditionalInfo(index)}></label>
                      </div>
                    </div>
                  )}
                  {showAdditionalInfo[index] && (
                    <div className={styles.lowerRow}>
                      <p className={styles.phone_nr}>
                        {appointment.patient_id === 0
                          ? appointment.phone_nr ?? ""
                          : appointment.Patients &&
                            "phone_nr" in appointment.Patients
                          ? (appointment.Patients.phone_nr as number)
                          : ""}
                      </p>
                      <p></p>
                      <button
                        className={styles.buttonche}
                        disabled={
                          appointment.Patients &&
                          "missed" in appointment.Patients
                            ? (appointment.Patients.missed as boolean)
                            : false
                        }
                        onClick={() =>
                          void handleMissedAppointment(
                            appointment.patient_id,
                            appointment.date
                          )
                        }>
                        Пропуснат
                      </button>
                    </div>
                  )}
                </div>
                <ReactModal
                  className={styles.contactModal}
                  isOpen={isModalOpen}
                  overlayClassName={styles.modalOverlay}
                  onRequestClose={closeModal}
                  ariaHideApp={true}
                  onAfterOpen={() => {
                    if (focusedInput === "name") {
                      nameInputRef.current?.focus();
                    } else if (focusedInput === "phoneNumber") {
                      phoneNumberInputRef.current?.focus();
                    }
                  }}>
                  <div className={styles.modalContent}>
                    <h2>Запази час</h2>
                    <div className={styles.nameFam}>
                      <div className={styles.firstName}>
                        <label htmlFor="name">Име:</label>
                        <input
                          className={styles.firstNameInput}
                          type="text"
                          ref={nameInputRef}
                          placeholder="Име на пациента"
                          id="name"
                          value={name}
                          onClick={handleNameInputClick}
                          onChange={handleNameChange}
                        />
                      </div>

                      <div className={styles.lastName}>
                        <label htmlFor="name">Фамилия:</label>
                        <input
                          className={styles.lastNameInput}
                          type="text"
                          ref={nameInputRef}
                          placeholder="Фамилия на пациента"
                          id="name"
                          value={name}
                          onClick={handleNameInputClick}
                          onChange={handleNameChange}
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="phoneNumber">Тел номер:</label>
                      <input
                        className={styles.phoneNumberInput}
                        type="tel"
                        placeholder="Номера на пациента"
                        ref={phoneNumberInputRef}
                        id="phoneNumber"
                        value={phoneNumber}
                        pattern="[0-9]*"
                        inputMode="tel"
                        onClick={handlePhoneNumberInputClick}
                        onChange={handlePhoneNumberChange}
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
                      // disabled={!isFormValid()}
                      onClick={() => {
                        updateAppointmentFunc(
                          dateForApp,
                          age_range,
                          typeEye,
                          name,
                          phoneNumber
                        );
                        void createAppointmentFunc(
                          dateForApp,
                          age_range,
                          typeEye,
                          name,
                          phoneNumber
                        );
                      }}>
                      Запази
                    </button>
                  </div>
                </ReactModal>
              </div>
            ))}
          </div>
          {/* </>
      ) : (
        <h1 className={styles.log}>Mоля, влезте в акаунта си!</h1>
      )} */}
        </>
      ) : (
        <div className={styles.calendarSelf}>
          <ReactCalendar
            minDate={new Date()}
            className={`REACT-CALENDAR`}
            view="month"
            onClickDay={(date) =>
              setDate((prev) => ({ ...prev, justDate: date }))
            }
          />
        </div>
      )}
    </div>
  );
};

export default Tablo;
