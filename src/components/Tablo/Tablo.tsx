import React, { useState, useEffect, FC, ChangeEvent, useRef } from "react";
import styles from "./Tablo.module.scss";
import supabase from "../../constants/supaClient.js";
import { User } from "@supabase/supabase-js";
import InfoFormBase from "../InfoFormBase";
import CalendarBase from "../Calendar";
import AppointmentCard from "./AppointmentCard";
import {
  formatDateToWords,
  getHoursManagementData,
  deleteAppointment,
} from "~/utils/functions";
import { AppointmentForTablo } from "~/utils/interfaces";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  isSameDay,
  isSameMinute,
  setMinutes,
  setHours,
  addMinutes,
} from "date-fns";

interface DateType {
  justDate: Date | null;
}

const justDate = new Date();

const Tablo: FC = ({}) => {
  const [date, setDate] = useState<DateType>({
    justDate: null,
  });
  const [appointments, setAppointments] = useState<AppointmentForTablo[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [showAdditionalInfo, setShowAdditionalInfo] = useState<boolean[]>(
    appointments.map(() => false)
  );

  const [openingHours, setOpeningHours] = useState<number>(0);
  const [closingHours, setClosingHours] = useState<number>(0);
  const [openingMinutes, setOpeningMinutes] = useState<number>(0);
  const [closingMinutes, setClosingMinutes] = useState<number>(0);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dateForApp, setDateForApp] = useState<Date>(new Date());

  const handleSetDateForApp = (newDate: Date) => {
    setDateForApp(newDate);
  };
  const openModal = (date: Date) => {
    setIsModalOpen(true);
  };

  function closeModal() {
    setIsModalOpen(false);
  }

  const toggleAdditionalInfo = (index: number) => {
    const updatedInfo = [...showAdditionalInfo];

    updatedInfo[index] = !updatedInfo[index];

    setShowAdditionalInfo(updatedInfo);
  };

  // Filter for appointments with selected date
  const appointmentsForSelectedDate = date.justDate
    ? appointments.filter((appointment) =>
        isSameDay(new Date(appointment.date), date.justDate!)
      )
    : [];

  // Fetches the opening and closing hours and minutes from the database
  async function getOpeningClosingHours() {
    try {
      const hoursManagementData = await getHoursManagementData("basic");
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
  void getOpeningClosingHours();

  // Create a constant for all active hours
  const getAllActiveHours: number[] = [];
  for (let i = openingHours; i <= closingHours; i++) {
    getAllActiveHours.push(i);
  }

  // Update local state when appointment is deleted from Supabase.
  const handleDeleteAppointment = async (index: number) => {
    const shouldDelete = window.confirm(
      "Сигурни ли сте, че искате да изтриете тази среща?"
    );
    if (shouldDelete) {
      await deleteAppointment(index, appointments);
      // Remove the appointment from the state
      const updatedAppointments = [...appointments];
      updatedAppointments.splice(index, 1);
      setAppointments(updatedAppointments);
    }
  };

  async function getAllAppointments() {
    const { data, error } = await supabase
      .from("Appointments")
      .select(
        "date, age_range, type, patient_id, Patients(name, lastName, phone_nr, missed)"
      )
      .order("date");
    if (error) {
      console.error("Error fetching appointments:", error);
    } else {
      setAppointments(data);
    }
  }

  //Get the patient data from Supabase
  useEffect(() => {
    async function getUserData() {
      await supabase.auth
        .getUser()
        .then((value) => {
          if (value.data?.user) {
            setUser(value.data.user);
            void getAllAppointments();
            console.log("User: ", value.data.user);
          }
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    }
    void getUserData();

    void getAllAppointments();
  }, []);

  // Creates an array of appointments with the opening and closing hours and minutes
  // This is used to filter out appointments that are outside of the opening and closing hours and to show them in the frontend
  const createLocalAppointments = (): AppointmentForTablo[] => {
    if (date.justDate === null) {
      return [];
    }
    const appointments: AppointmentForTablo[] = [];

    //Define opening and closing times
    const openingTime = setMinutes(
      setHours(date.justDate, openingHours),
      openingMinutes
    );
    const closingTime = setMinutes(
      setHours(date.justDate, closingHours),
      closingMinutes
    );

    // Create an array of appointments within the opening and closing times
    for (
      let time = openingTime;
      time <= closingTime;
      time = addMinutes(time, 20)
    ) {
      const isDuplicate = appointmentsForSelectedDate.some((todayAppt) =>
        isSameMinute(new Date(time), new Date(todayAppt.date))
      );

      if (!isDuplicate) {
        const appointment: AppointmentForTablo = {
          date: time,
          type: "empty",
          patient_id: 0,
          Patients: [],
        };
        appointments.push(appointment);
      }
    }

    const mergedAppointments = [
      ...appointments,
      ...appointmentsForSelectedDate,
    ];
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

  const allAppointments: AppointmentForTablo[] = createLocalAppointments();

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
              <ToastContainer />
              {/* Info form will be shown when the plus button on an empty appointment is clicked */}
              {isModalOpen ? (
                <div className={styles.infoForm}>
                  <div className={styles.modal}>
                    <div
                      onClick={() => setIsModalOpen(false)}
                      className={styles.overlay}></div>
                    <div className={styles.modalContent}>
                      <InfoFormBase
                        appoinmentDateTime={dateForApp}
                        getAllAppointments={() => getAllAppointments()}
                        closeModal={() => closeModal()}
                      />
                    </div>
                  </div>
                </div>
              ) : null}
              {allAppointments.map((appointment, index) => (
                <div
                  className={styles.appointmentCards}
                  key={appointment.date.toString()}>
                  <AppointmentCard
                    appointments={appointments}
                    appointment={appointment}
                    index={index}
                    toggleAdditionalInfo={toggleAdditionalInfo}
                    handleDeleteAppointment={handleDeleteAppointment}
                    showAdditionalInfo={showAdditionalInfo}
                    onMakeNewAppointment={handleSetDateForApp}
                    openModal={openModal}
                  />
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