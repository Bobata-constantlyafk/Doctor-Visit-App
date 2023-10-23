import { FC, useState, useEffect } from "react";
import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styles from "./Calendar.module.scss";
import { add, format, isSameMinute, setMinutes } from "date-fns";
import {
  INTERVAL,
  OPENING_HOURS,
  CLOSING_HOURS_SECONDARY,
  CLOSING_MINUTES_SECONDARY,
  OPENING_MINUTES,
} from "~/constants/config";
import supabase from "../../constants/supaClient.js";
import { PostgrestSingleResponse } from "@supabase/supabase-js";
import { useGlobalContext } from "~/constants/store";
import { useRouter } from "next/router";
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

interface Patient {
  id: number;
  name: string;
  phone_nr: string;
}

const CalendarPrimary: FC = ({}) => {
  const [date, setDate] = useState<DateType>({
    justDate: null,
    dateTime: null,
  });
  const router = useRouter();

  // Global state variables
  const { name, phoneNumber, age_range, typeEye } = useGlobalContext();

  // State to store existing appointments for the selected date
  const [existingAppointments, setExistingAppointments] = useState<Date[]>([]);

  // Fetch existing appointments for the selected date from the database
  useEffect(() => {
    const fetchExistingAppointments = async () => {
      if (!date.justDate) return;

      const formattedSelectedDate = format(date.justDate, "yyyy-MM-dd");

      try {
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
      } catch (error) {
        console.error("Error in fetchExistingAppointments:", error);
      }
    };

    fetchExistingAppointments()
      .then(() => {
        console.log("We have the existing appointments!");
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
      add(justDate, { hours: CLOSING_HOURS_SECONDARY }),
      CLOSING_MINUTES_SECONDARY
    );
    const interval = INTERVAL;

    const times = [];
    for (let i = beginning; i <= end; i = add(i, { minutes: interval })) {
      const fortyMinutesAhead = add(i, { minutes: 40 });

      // Check if the time has already passed
      const hasPassed = i < now;
      const isFortyMinutesAheadAvailable = !existingAppointments.some(
        (appointment) => isSameMinute(appointment, fortyMinutesAhead)
      );
      const isTimeTaken =
        hasPassed ||
        existingAppointments.some((appointmentTime) =>
          isSameMinute(appointmentTime, i)
        );

      times.push({ time: i, isFortyMinutesAheadAvailable, isTimeTaken });
    }

    return times;
  };

  const times = getTimes();

  const createPatient = async () => {
    let patient_id = null;
    await (
      supabase
        .from("Patients")
        .upsert([{ name: name, phone_nr: phoneNumber }], {
          onConflict: "phone_nr",
        })
        .select("*") as unknown as Promise<{
        data: Patient[];
        error: Error;
      }>
    )
      .then(({ data, error }) => {
        if (error) {
          console.error("Error with creating the patient:", error);
          return null;
        } else {
          const patient = data[0]?.id;
          console.log("Patient id form createPatient:", data);
          patient_id = patient;
        }
      })
      .catch((error) => {
        console.error("Error with creating the patient:", error);
      });
    return patient_id;
  };

  const createAppointments = async (dateTime: Date) => {
    const patient_id = await createPatient();
    const fortyMinutesAhead = add(dateTime, { minutes: 40 });
    (
      supabase.from("Appointments").upsert([
        {
          date: dateTime,
          age_range: age_range,
          type: typeEye,
          patient_id: patient_id,
        },
        {
          date: fortyMinutesAhead,
          age_range: age_range,
          type: typeEye,
          patient_id: patient_id,
        },
      ]) as unknown as Promise<{
        data: Appointment;
        error: Error;
      }>
    )
      .then(({ data, error }) => {
        if (error) {
          console.error("Error creating appointment:", error);
        } else {
          console.log("Appointment created successfully:", data);
          void router.push(
            `/success?appointmentDate=${encodeURIComponent(
              dateTime.toISOString()
            )}`
          );
        }
      })
      .catch((error) => {
        console.error("Error creating appointment:", error);
      });
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
              <h3> Първичен преглед</h3>
            </div>
          </div>
          <div className={styles.buttonContainer}>
            {times?.map((timeObj, i) => {
              const { time, isFortyMinutesAheadAvailable, isTimeTaken } =
                timeObj;

              return (
                <div key={`time-${i}`} className="hour">
                  <button
                    type="button"
                    onClick={() => {
                      setDate((prev) => ({ ...prev, dateTime: time }));
                      createAppointments(time)
                        .then(() => {
                          console.log("Appointment created successfully");
                        })
                        .catch(() => {
                          console.error("Error creating appointment");
                        });
                    }}
                    disabled={isTimeTaken || !isFortyMinutesAheadAvailable}>
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

export default CalendarPrimary;
