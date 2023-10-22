import { FC, useState, useEffect } from "react";
import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styles from "./Calendar.module.scss";
import { add, format, isSameMinute, setMinutes } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";
import {
  CLOSING_HOURS,
  INTERVAL,
  OPENING_HOURS,
  CLOSING_MINUTES,
  OPENING_MINUTES,
} from "~/constants/config";
import supabase from "../../constants/supaClient.js";
import { PostgrestSingleResponse, PostgrestError } from "@supabase/supabase-js";
import { useGlobalContext } from "~/constants/store";
import { useRouter } from "next/router";
import { createAppointmentFunc } from "~/utils/functions";
import { formatDateToWords } from "~/utils/functions";

interface DateType {
  justDate: Date | null;
  dateTime: Date | null;
}

interface Appointment {
  date: string;
  age_range?: string;
  type?: string;
  patient_id?: number;
}

const CalendarSecondary: FC = ({}) => {
  const [date, setDate] = useState<DateType>({
    justDate: null,
    dateTime: null,
  });
  const router = useRouter();

  // Global state variables
  const { name, lastName, phoneNumber, age_range, typeEye } =
    useGlobalContext();

  // State to store existing appointments for the selected date
  const [existingAppointments, setExistingAppointments] = useState<Date[]>([]);

  // Fetch existing appointments for the selected date from the database
  useEffect(() => {
    const fetchExistingAppointments = async () => {
      if (!date.justDate) return;

      const formattedSelectedDate = format(date.justDate, "yyyy-MM-dd");

      const { data, error }: PostgrestSingleResponse<Appointment[]> =
        await supabase
          .from("Appointments")
          .select("date")
          .gte("date", formattedSelectedDate)
          .order("date");

      if (error) {
        console.error("Error fetching existing appointments:", error);
      } else {
        const existingDates = data.map(
          (appointment: { date: string }) => new Date(appointment.date)
        );
        setExistingAppointments(existingDates);
      }
    };

    fetchExistingAppointments()
      .then(() => {
        console.log("We have the appointments!");
      })
      .catch((error) => {
        console.error("Error in fetchExistingAppointments:", error);
      });
  }, [date.justDate]);

  const getTimes = () => {
    if (!date.justDate) return;

    const { justDate } = date;
    const now = new Date();
    const beginning = setMinutes(
      add(justDate, { hours: OPENING_HOURS }),
      OPENING_MINUTES
    );
    const end = setMinutes(
      add(justDate, { hours: CLOSING_HOURS }),
      CLOSING_MINUTES
    );
    const interval = INTERVAL;

    const times = [];
    for (let i = beginning; i <= end; i = add(i, { minutes: interval })) {
      // Check if the time has already passed
      const hasPassed = i < now;
      const isTimeTaken =
        hasPassed ||
        existingAppointments.some((appointmentTime) =>
          isSameMinute(appointmentTime, i)
        );
      times.push({ time: i, isTimeTaken });
    }

    return times;
  };

  const times = getTimes();

  const handleAppointmentCreation = async (
    time: Date,
    age_range: string,
    typeEye: string,
    name: string,
    lastName: string,
    phoneNumber: string
  ) => {
    try {
      await createAppointmentFunc(
        time,
        age_range,
        typeEye,
        name,
        lastName,
        phoneNumber
      );
      void router.push(
        `/success?appointmentDate=${encodeURIComponent(time.toISOString())}`
      );
    } catch (error) {
      console.error("Appointment creation failed:", error);
      // Handle the error as needed, e.g., show an error message to the user.
    }
  };

  return (
    <div className={styles.calendarMain}>
      {date.justDate ? (
        <>
          <div className={styles.viewAvailableHoursHeading}>
            <button
              className={styles.buttonBack}
              onClick={() => setDate({ justDate: null, dateTime: null })}>
              ← Назад
            </button>
            <div>
              <h1>{formatDateToWords(date.justDate)}</h1>
              <h3> Вторичен преглед</h3>
            </div>
          </div>
          <div className={styles.buttonContainer}>
            {times?.map((timeObj, i) => {
              const { time, isTimeTaken } = timeObj;
              return (
                <div key={`time-${i}`} className="hour">
                  <button
                    type="button"
                    onClick={() => {
                      setDate((prev) => ({ ...prev, dateTime: time }));
                      void handleAppointmentCreation(
                        time,
                        age_range,
                        typeEye,
                        name,
                        lastName,
                        phoneNumber
                      );
                    }}
                    disabled={isTimeTaken}>
                    {format(time, "kk:mm")}
                  </button>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <ReactCalendar
          minDate={new Date()}
          className={`${styles.calendarSelf} REACT-CALENDAR`}
          view="month"
          onClickDay={(date) =>
            setDate((prev) => ({ ...prev, justDate: date }))
          }
        />
      )}
    </div>
  );
};

export default CalendarSecondary;
