import React, { useState, useEffect, FC } from "react";
import styles from "./Tablo.module.scss";
import supabase from "../../constants/supaClient.js";
import { getHours, getMinutes, getDate, isAfter, isSameDay } from "date-fns";
import { User } from "@supabase/supabase-js";
import {
  OPENING_HOURS,
  OPENING_MINUTES,
  CLOSING_HOURS,
  CLOSING_MINUTES,
  INTERVAL,
} from "~/constants/config";

interface Appointment {
  date: Date;
  age_range: string;
  type: string;
  phone_nr?: string;
  name?: string;
  patient_id: number;
  Patients: { name: string; phone_nr: number; missed: boolean }[];
}

const Tablo: FC = ({}) => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [showAdditionalInfo, setShowAdditionalInfo] = useState<boolean[]>(
    appointments.map(() => false)
  );

  const toggleAdditionalInfo = (index: number) => {
    const updatedInfo = [...showAdditionalInfo];

    updatedInfo[index] = !updatedInfo[index];

    setShowAdditionalInfo(updatedInfo);
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

    (
      supabase
        .from("Appointments")
        .delete()
        .eq("date", appointmentToDelete.date) as unknown as Promise<{
        data: Appointment;
        error: Error;
      }>
    )
      .then(({ error }) => {
        if (error) {
          console.error("Error deleting appointment:", error);
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

  function formatDate(date: Date) {
    const day = getDate(date);
    const monthIndex = date.getMonth();
    const month = monthAbbreviations[monthIndex];

    return `${day} ${month}`;
  }

  const currentDate = new Date();

  return (
    <div className={styles.tabloMain}>
      {/* {user ? (
        <> */}
      <h1 className={styles.header}>Днешни срещи</h1>
      <div className={styles.tabloCards}>
        {appointments.map((appointment, index) => (
          <div
            className={styles.appointmentCards}
            key={appointment.date.toString()}>
            <div
              className={`${styles.appointmentCard} ${
                appointment.Patients &&
                "missed" in appointment.Patients &&
                appointment.Patients.missed
                  ? styles.missedAppointment
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
                <p>{formatDate(new Date(appointment.date))}</p>
                <img
                  src="close.png"
                  alt=""
                  onClick={(
                    event: React.MouseEvent<HTMLImageElement, MouseEvent>
                  ) => {
                    event.preventDefault();
                    handleDeleteAppointment(appointments.indexOf(appointment));
                  }}
                />
              </div>
              <div className={styles.middleRow}>
                <p className={styles.name}>
                  {appointment.Patients && "name" in appointment.Patients
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
              {showAdditionalInfo[index] && (
                <div className={styles.lowerRow}>
                  <p className={styles.phone_nr}>
                    {appointment.Patients && "phone_nr" in appointment.Patients
                      ? (appointment.Patients.phone_nr as number)
                      : ""}
                  </p>
                  <button
                    disabled={
                      appointment.Patients && "missed" in appointment.Patients
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
          </div>
        ))}
      </div>
      {/* </>
      ) : (
        <h1 className={styles.log}>Mоля, влезте в акаунта си!</h1>
      )} */}
    </div>
  );
};

export default Tablo;