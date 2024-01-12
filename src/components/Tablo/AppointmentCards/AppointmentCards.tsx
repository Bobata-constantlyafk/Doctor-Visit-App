import React, { useState } from "react";
import styles from "./AppointmentCard.module.scss";
import { getHours, getMinutes } from "date-fns";
import { setAppointmentAsMissed } from "~/utils/functions";

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

interface AppointmentCardProps {
  appointments: Appointment[];
  appointment: Appointment;
  index: number;
  toggleAdditionalInfo: (index: number) => void;
  handleDeleteAppointment: (index: number) => Promise<void>;
  showAdditionalInfo: boolean[];
}

const [dateForApp, setDateForApp] = useState<Date>(new Date());
const [isModalOpen, setIsModalOpen] = useState(false);

const openModal = (date: Date) => {
  setIsModalOpen(true);
};
const AppointmentCard: React.FC<AppointmentCardProps> = ({
  appointments,
  appointment,
  index,
  toggleAdditionalInfo,
  handleDeleteAppointment,
  showAdditionalInfo,
}) => {
  return (
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
          {String(getMinutes(new Date(appointment.date))).padStart(2, "0")}
        </p>

        {appointment.type === "empty" ? (
          <p>Празен</p>
        ) : (
          <React.Fragment>
            <p className={styles.name}>
              {appointment.patient_id === 0
                ? `${appointment.name ?? ""} ${appointment.lastName ?? ""}`
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
                onClick={() => toggleAdditionalInfo(index)}></label>
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
                openModal(appointment.date);
              }}
            />
          </React.Fragment>
        ) : (
          <img
            src="close.png"
            alt=""
            onClick={(
              event: React.MouseEvent<HTMLImageElement, MouseEvent>
            ) => {
              event.preventDefault();
              void handleDeleteAppointment(appointments.indexOf(appointment));
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
              : appointment.Patients && "phone_nr" in appointment.Patients
              ? (appointment.Patients.phone_nr as number)
              : ""}
          </p>
          <p></p>
          <button
            className={styles.buttonche}
            disabled={
              appointment.Patients && "missed" in appointment.Patients
                ? (appointment.Patients.missed as boolean)
                : false
            }
            onClick={() =>
              void setAppointmentAsMissed(
                appointment.patient_id,
                appointment.date
              )
            }>
            Пропуснат
          </button>
        </div>
      )}
    </div>
  );
};

export default AppointmentCard;
