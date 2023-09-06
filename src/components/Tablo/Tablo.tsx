import React, { useState, useEffect } from "react";
import styles from "./Tablo.module.scss";
import supabase from "../../constants/supaClient.js";
import { getHours, getMinutes, getDate, isAfter, isSameDay } from "date-fns";

interface Appointment {
  date: Date;
  age_range: string;
  type: string;
  phone_nr: string;
  name: string;
  missed: boolean;
}
// eslint-disable-next-line
interface TabloProps {}

const Tablo: React.FC<TabloProps> = ({}) => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    async function fetchAppointments() {
      const { data, error } = await supabase
        .from("Appointments")
        .select("date, age_range, type, phone_nr, name, missed")
        .order("date");
      if (error) {
        console.error("Error fetching appointments:", error);
      } else {
        setAppointments(data);
      }
    }
    fetchAppointments()
      .then(() => {
        console.log("Existing appointments:", appointments);
      })
      .catch((error) => {
        console.error("Error in fetchExistingAppointments:", error);
      });
  }, []);

  const handleDeleteAppointment = (index: number) => {
    // Get the appointment to be deleted
    const appointmentToDelete = appointments[index];

    if (!appointmentToDelete) {
      console.error("Appointment to delete is undefined");
      return;
    }

    // Update the database (you need to define the delete operation in your Supabase config)
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

  const filteredAppointments = appointments.filter((appointment) =>
    isAfter(new Date(appointment.date), currentDate)
  );

  const todaysAppointments = appointments.filter((appointment) =>
    isSameDay(new Date(appointment.date), currentDate)
  );

  return (
    <div className={styles.tabloMain}>
      <h1 className={styles.header}>Днешни срещи</h1>
      <div className={styles.tabloCards}>
        {todaysAppointments.map((appointment, index) => (
          <div
            className={styles.appointmentCards}
            key={appointment.date.toString()}>
            <div className={styles.appointmentCard}>
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
              <div className={styles.lowerRow}>
                <p className={styles.name}>{appointment.name}</p>
                <p>{appointment.type ? "Първичен" : "Вторичен"}</p>
                <p className={styles.missed}>
                  {appointment.missed ? "Пропуснат" : ""}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h1 className={styles.header}>Престоящи срещи</h1>
      <div className={styles.tabloCards}>
        {filteredAppointments.map((appointment, index) => (
          <div
            className={styles.appointmentCards}
            key={appointment.date.toString()}>
            <div className={styles.appointmentCard}>
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
              <div className={styles.lowerRow}>
                <p className={styles.name}>{appointment.name}</p>
                <p>{appointment.type ? "Първичен" : "Вторичен"}</p>
                <p className={styles.missed}>
                  {appointment.missed ? "Пропуснат" : ""}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tablo;
