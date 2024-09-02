import { FC, useState, useEffect } from "react";
import React from "react";
import Calendar from "../Calendar";
import "react-calendar/dist/Calendar.css";
import styles from "./DateBookingManager.module.scss";
import { add, format, isSameMinute, setMinutes } from "date-fns";
import { useGlobalContext } from "~/utils/store";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  createAppointmentFunc,
  formatDateToWords,
  getHoursManagementData,
  getExistingAppointments,
} from "~/utils/functions";

const DateBookingManager: FC = ({}) => {
  const [date, setDate] = useState<Date | null>(null);

  const router = useRouter();
  const successType = "appointment";

  // Global state variables
  const { name, lastName, phoneNumber, EGN, age_range, typeEye } =
    useGlobalContext();

  // State to store existing appointments for the selected date
  const [existingAppointments, setExistingAppointments] = useState<Date[]>([]);

  // State to store opening and closing hours
  const [openingHours, setOpeningHours] = useState<number>(0);
  const [closingHours, setClosingHours] = useState<number>(0);
  const [openingMinutes, setOpeningMinutes] = useState<number>(0);
  const [closingMinutes, setClosingMinutes] = useState<number>(0);

  const [appointmentType, setAppointmentType] = useState<string>("empty");
  const [title, setTitle] = useState<string>("Запазване на час");
  const [minutesAheadInterval, setMinutesAheadInterval] = useState<number>(0);
  const [extraMinutesAheadInterval, setExtraMinutesAheadInterval] =
    useState<number>(0);

  const getDataForAppointmentType = () => {
    switch (typeEye) {
      case "Purvichen": {
        setTitle("Първичен преглед");
        switch (age_range) {
          case "Pod": {
            setAppointmentType("primaryYouth");
            setMinutesAheadInterval(80);
            setExtraMinutesAheadInterval(100);
            break;
          }
          case "Nad": {
            setAppointmentType("primary");
            setMinutesAheadInterval(40);
            break;
          }
        }
        break;
      }
      case "Vtorichen": {
        setAppointmentType("secondary");
        setTitle("Вторичен преглед");
        break;
      }
    }
  };
  //Gets Hours including specific hours for the type of appointment
  async function fetchOpeningClosingHours() {
    try {
      const hoursManagementData = await getHoursManagementData(appointmentType);
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
  void fetchOpeningClosingHours();

  useEffect(() => {
    getDataForAppointmentType();
    if (!date) return;

    getExistingAppointments(date, typeEye, age_range)
      .then((existingAppointments) => {
        setExistingAppointments(existingAppointments);
        console.log("Existing appointments fetched");
      })
      .catch((error) => {
        console.error("Error in fetchExistingAppointments:", error);
      });
  }, [date, typeEye, age_range]);

  const generateAppointments = () => {
    if (!date) return;

    const currentDateTime = new Date();

    const openingHoursMinutes = setMinutes(
      add(date, { hours: openingHours }),
      openingMinutes
    );
    const closingHoursMinutes = setMinutes(
      add(date, { hours: closingHours }),
      closingMinutes
    );

    const appointments = [];

    let isEndingTimeTaken = false;
    let timeBetweenNextAppointment = "";

    for (
      let i = openingHoursMinutes;
      i <= closingHoursMinutes;
      i = add(i, { minutes: 20 })
    ) {
      // Check if the time has already passed
      const hasPassed = i < currentDateTime;

      const isStartingTimeTaken =
        hasPassed ||
        existingAppointments.some((appointmentTime) =>
          isSameMinute(appointmentTime, i)
        );

      const addMinutesAhead = add(i, { minutes: minutesAheadInterval });
      const addExtraMinutesAhead = add(i, {
        minutes: extraMinutesAheadInterval,
      });

      const check40 = !existingAppointments.some((appointment) =>
        isSameMinute(appointment, addMinutesAhead)
      );

      const check1H20 = !existingAppointments.some((appointment) =>
        isSameMinute(appointment, addMinutesAhead)
      );

      const check1H40 = !existingAppointments.some((appointment) =>
        isSameMinute(appointment, addExtraMinutesAhead)
      );

      switch (typeEye) {
        case "Purvichen":
          switch (age_range) {
            case "Nad":
              isEndingTimeTaken = check40;
              break;

            case "Pod":
              switch (true) {
                case check1H20:
                  isEndingTimeTaken = check1H20;
                  timeBetweenNextAppointment = "1h20";
                  break;

                case check1H40:
                  isEndingTimeTaken = check1H40;
                  timeBetweenNextAppointment = "1h40";
                  break;
                default:
                  isEndingTimeTaken = false;
                  timeBetweenNextAppointment = "none";
                  break;
              }
              break;

            default:
              console.log("Unknown age_range:", age_range);
              break;
          }
          break;

        case "Vtorichen":
          isEndingTimeTaken = true;
          break;

        default:
          console.log("Unknown typeEye:", typeEye);
          break;
      }

      appointments.push({
        time: i,
        isEndingTimeTaken,
        isStartingTimeTaken,
        timeBetweenNextAppointment,
      });

      console.log(
        "Ending Time: " + isEndingTimeTaken + " | " + i.toString().slice(16, 25)
      );
    }

    return appointments;
  };

  const appointments = generateAppointments();

  const handleAppointmentCreation = async (
    time: Date,
    age_range: string,
    typeEye: string,
    name: string,
    lastName: string,
    phoneNumber: string,
    EGN: string,
    timeBetweenNextAppointment?: string
  ) => {
    try {
      await createAppointmentFunc(
        time,
        age_range,
        typeEye,
        name,
        lastName,
        phoneNumber,
        EGN,
        timeBetweenNextAppointment
      );
      // void router.push(
      //   `/success?appointmentDate=${encodeURIComponent(time.toISOString())}`
      // );
      void router.push({
        pathname: "/success",
        query: {
          time: time.toISOString(),
          successType,
        },
      });
    } catch (error) {
      console.error("Appointment creation failed:", error);
    }
  };

  const getAllActiveHours: number[] = [];
  for (let i = openingHours; i <= closingHours; i++) {
    getAllActiveHours.push(i);
  }

  return (
    <div className={styles.calendarMain}>
      {date ? (
        <React.Fragment>
          <div className={styles.viewAvailableHoursHeading}>
            <button className={styles.buttonBack} onClick={() => setDate(null)}>
              ← Назад
            </button>
            <div>
              <h1>{formatDateToWords(date)}</h1>
              <h3> {title} </h3>
            </div>
          </div>
          <div className={styles.hoursContainer}>
            <div className={styles.calendarHours}>
              {getAllActiveHours.map((hour) => (
                <div className={styles.calendarHour} key={hour}>
                  <h1>{hour}</h1>
                </div>
              ))}
            </div>

            <div>
              {appointments?.map((timeObj, i) => {
                const {
                  time,
                  isEndingTimeTaken,
                  isStartingTimeTaken,
                  timeBetweenNextAppointment,
                } = timeObj;
                return (
                  <div key={`time-${i}`} className="hour">
                    <button
                      type="button"
                      onClick={() => {
                        setDate(date);
                        void handleAppointmentCreation(
                          time,
                          age_range,
                          typeEye,
                          name,
                          lastName,
                          phoneNumber,
                          EGN,
                          timeBetweenNextAppointment
                        );
                      }}
                      disabled={isStartingTimeTaken || !isEndingTimeTaken}>
                      {format(time, "kk:mm")}
                    </button>
                    <ToastContainer />
                  </div>
                );
              })}
            </div>
          </div>
        </React.Fragment>
      ) : (
        <Calendar onSelectDate={(selectedDate) => setDate(selectedDate)} />
      )}
    </div>
  );
};
export default DateBookingManager;