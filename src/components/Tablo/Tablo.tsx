import React, { useState, useEffect, FC, ChangeEvent, useRef } from "react";
import styles from "./Tablo.module.scss";
import supabase from "../../constants/supaClient.js";
import { User } from "@supabase/supabase-js";
import ReactModal from "react-modal";
import { createAppointmentFunc } from "~/utils/functions";
import CalendarBase from "../Calendar-Base";
import "react-calendar/dist/Calendar.css";
import { formatDateToWords, getHoursManagementData } from "~/utils/functions";

import {
  getHours,
  getMinutes,
  isSameDay,
  isSameMinute,
  setMinutes,
  setHours,
  addMinutes,
} from "date-fns";

interface Appointment {
  date: Date;
  age_range?: string;
  type?: string;
  phone_nr?: string;
  name?: string;
  lastName?: string;
  patient_id: number;
  Patients: {
    name: string;
    lastName: string;
    phone_nr: string;
    missed: boolean;
  }[];
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
  const [lastName, setLastName] = useState<string>("");
  const [typeEye, setTypeEye] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [age_range, setAge_range] = useState<string>("");

  const [openingHours, setOpeningHours] = useState<number>(0);
  const [closingHours, setClosingHours] = useState<number>(0);
  const [openingMinutes, setOpeningMinutes] = useState<number>(0);
  const [closingMinutes, setClosingMinutes] = useState<number>(0);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dateForApp, setDateForApp] = useState<Date>(new Date());

  const nameInputRef = useRef<HTMLInputElement>(null);
  const lastNameInputRef = useRef<HTMLInputElement>(null);
  const phoneNumberInputRef = useRef<HTMLInputElement>(null);
  const [focusedInput, setFocusedInput] = useState("name");

  const handlePhoneNumberInputClick = () => {
    setFocusedInput("phoneNumber");
  };
  const handleNameInputClick = () => {
    setFocusedInput("name");
  };
  const handleLastNameInputClick = () => {
    setFocusedInput("lastName");
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleAdditionalInfo = (index: number) => {
    const updatedInfo = [...showAdditionalInfo];

    updatedInfo[index] = !updatedInfo[index];

    setShowAdditionalInfo(updatedInfo);
  };

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleLastNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
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

  async function fetchHourManagementData() {
    try {
      const hoursManagementData = await getHoursManagementData("basic");
      console.log("Data from HoursManagement table:", hoursManagementData);
      if (hoursManagementData) {
        setOpeningHours(hoursManagementData.openingHours);
        setClosingHours(hoursManagementData.closingHours);
        setOpeningMinutes(hoursManagementData.openingMinutes);
        setClosingMinutes(hoursManagementData.closingMinutes);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  void fetchHourManagementData();

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
          "date, age_range, type, patient_id, Patients(name, lastName, phone_nr, missed)"
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
      setHours(date.justDate, openingHours),
      openingMinutes
    );
    const closingTime = setMinutes(
      setHours(date.justDate, closingHours),
      closingMinutes
    );

    for (
      let time = openingTime;
      time <= closingTime;
      time = addMinutes(time, 20)
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
    lastName: string,
    phoneNumber: string
  ) => {
    console.log("Name:", name, "Number:", phoneNumber);
    const updatedAppointment = {
      date: date,
      age_range: age_range,
      type: typeEye,
      name: name,
      lastName: lastName,
      phone_nr: phoneNumber,
      patient_id: 0,
      Patients: [
        {
          name: name,
          lastName: lastName,
          phone_nr: phoneNumber,
          missed: false,
        },
      ],
    };

    // Update the local state with the new appointment
    setAppointments((prevAppointments) => [
      ...prevAppointments,
      updatedAppointment,
    ]);

    closeModal();
  };

  const allAppointments: Appointment[] = createAppointments();

  const getAllActiveHours: number[] = [];
  for (let i = openingHours; i <= closingHours; i++) {
    getAllActiveHours.push(i);
  }

  return (
    <div className={styles.tabloMain}>
      {date.justDate ? (
        <>
          {/* {user ? (
        <> */}
          <div className={styles.header}>
            <button
              className={styles.buttonBack}
              onClick={() => setDate({ justDate: null })}>
              ← Назад
            </button>
            <h1>{formatDateToWords(date.justDate)}</h1>
          </div>
          <div className={styles.appsAndHours}>
            <div className={styles.tabloHours}>
              {getAllActiveHours.map((hour) => (
                <div key={hour}>
                  <h1>{hour}</h1>
                </div>
              ))}
            </div>
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
                      <p>
                        {getHours(new Date(appointment.date))}:
                        {String(
                          getMinutes(new Date(appointment.date))
                        ).padStart(2, "0")}
                      </p>

                      {appointment.type === "empty" ? (
                        <p>Празен</p>
                      ) : (
                        <React.Fragment>
                          <p className={styles.name}>
                            {appointment.patient_id === 0
                              ? `${appointment.name ?? ""} ${
                                  appointment.lastName ?? ""
                                }`
                              : appointment.Patients &&
                                "name" in appointment.Patients &&
                                "lastName" in appointment.Patients
                              ? `${
                                  (
                                    appointment.Patients as {
                                      name: string;
                                      lastName: string;
                                    }
                                  ).name
                                } ${
                                  (
                                    appointment.Patients as {
                                      name: string;
                                      lastName: string;
                                    }
                                  ).lastName
                                }`
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
                              onClick={() =>
                                toggleAdditionalInfo(index)
                              }></label>
                          </div>
                        </React.Fragment>
                      )}

                      {appointment.type === "empty" ? (
                        <React.Fragment>
                          <p></p>
                          <img
                            className={styles.novChas}
                            src="plus.png"
                            alt="nov-chas"
                            onClick={() => {
                              setDateForApp(appointment.date);
                              openModal();
                            }}
                          />
                        </React.Fragment>
                      ) : (
                        <img
                          src="close.png"
                          alt=""
                          onClick={(
                            event: React.MouseEvent<
                              HTMLImageElement,
                              MouseEvent
                            >
                          ) => {
                            event.preventDefault();
                            handleDeleteAppointment(
                              appointments.indexOf(appointment)
                            );
                          }}
                        />
                      )}
                    </div>

                    {showAdditionalInfo[index] && (
                      <div className={styles.lowerRow}>
                        <p>
                          {appointment.type === "Purvichen"
                            ? "Първ."
                            : appointment.type === "Vtorichen"
                            ? "Втор."
                            : ""}
                        </p>
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
                      } else if (focusedInput === "lastName") {
                        lastNameInputRef.current?.focus();
                      }
                    }}>
                    <div className={styles.modalContent}>
                      <h2>Запази час</h2>
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
                          ref={lastNameInputRef}
                          placeholder="Фамилия на пациента"
                          id="lastName"
                          value={lastName}
                          onClick={handleLastNameInputClick}
                          onChange={handleLastNameChange}
                        />
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
                            lastName,
                            phoneNumber
                          );
                          void createAppointmentFunc(
                            dateForApp,
                            age_range,
                            typeEye,
                            name,
                            lastName,
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
          </div>
          {/* </>
      ) : (
        <h1 className={styles.log}>Mоля, влезте в акаунта си!</h1>
      )} */}
        </>
      ) : (
        <div className={styles.calendarSelf}>
          <CalendarBase
            onSelectDate={(selectedDate) => setDate({ justDate: selectedDate })}
          />
        </div>
      )}
    </div>
  );
};

export default Tablo;
