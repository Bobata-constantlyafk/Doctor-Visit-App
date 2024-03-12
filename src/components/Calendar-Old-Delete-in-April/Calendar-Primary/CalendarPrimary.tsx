// import { FC, useState, useEffect } from "react";
// import CalendarBase from "../../Calendar-Base";
// import "react-calendar/dist/Calendar.css";
// import styles from "./Calendar.module.scss";
// import { add, format, isSameMinute, setMinutes } from "date-fns";
// import supabase from "../../../constants/supaClient.js";
// import { PostgrestSingleResponse } from "@supabase/supabase-js";
// import { useGlobalContext } from "~/constants/store";
// import { useRouter } from "next/router";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import {
//   createAppointmentFunc,
//   formatDateToWords,
//   getHoursManagementData,
// } from "~/utils/functions";

// interface DateType {
//   justDate: Date | null;
//   dateTime: Date | null;
// }

// interface Appointment {
//   date: string;
//   age_range?: string;
//   type?: string;
//   patient_id?: number;
// }

// const CalendarPrimary: FC = ({}) => {
//   const [date, setDate] = useState<DateType>({
//     justDate: null,
//     dateTime: null,
//   });

//   const router = useRouter();

//   // Global state variables
//   const { name, lastName, phoneNumber, age_range, typeEye } =
//     useGlobalContext();

//   // State to store existing appointments for the selected date
//   const [existingAppointments, setExistingAppointments] = useState<Date[]>([]);

//   // State to store opening and closing hours
//   const [openingHours, setOpeningHours] = useState<number>(0);
//   const [closingHours, setClosingHours] = useState<number>(0);
//   const [openingMinutes, setOpeningMinutes] = useState<number>(0);
//   const [closingMinutes, setClosingMinutes] = useState<number>(0);

//   //Gets Hours including specific hours for the type of appointment
//   async function fetchOpeningClosingHours() {
//     try {
//       const hoursManagementData = await getHoursManagementData("primary");
//       if (hoursManagementData) {
//         setOpeningHours(hoursManagementData.openingHours);
//         setClosingHours(hoursManagementData.closingHours);
//         setOpeningMinutes(hoursManagementData.openingMinutes);
//         setClosingMinutes(hoursManagementData.closingMinutes);
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   }
//   void fetchOpeningClosingHours();

//   // Fetch existing appointments for the selected date from the database
//   useEffect(() => {
//     const fetchExistingAppointments = async () => {
//       if (!date.justDate) return;

//       const formattedSelectedDate = format(date.justDate, "yyyy-MM-dd");

//       try {
//         const { data, error }: PostgrestSingleResponse<Appointment[]> =
//           await supabase
//             .from("Appointments")
//             .select("date")
//             .gte("date", formattedSelectedDate)
//             .order("date");

//         if (error) {
//           console.error("Error fetching existing appointments:", error);
//         } else {
//           const existingDates = data.map(
//             (appointment: { date: string }) => new Date(appointment.date)
//           );
//           setExistingAppointments(existingDates);
//         }
//       } catch (error) {
//         console.error("Error in fetchExistingAppointments:", error);
//       }
//     };

//     fetchExistingAppointments()
//       .then(() => {})
//       .catch((error) => {
//         console.error("Error in fetchExistingAppointments:", error);
//       });
//   }, [date.justDate]);

//   const generateAppointments = () => {
//     if (!date.justDate) return;

//     const { justDate } = date;

//     const currentDateTime = new Date(); // Get the current date and time

//     const openingHoursMinutes = setMinutes(
//       add(justDate, { hours: openingHours }),
//       openingMinutes
//     );
//     const closingHoursMinutes = setMinutes(
//       add(justDate, { hours: closingHours }),
//       closingMinutes
//     );

//     const appointments = [];
//     for (
//       let i = openingHoursMinutes;
//       i <= closingHoursMinutes;
//       i = add(i, { minutes: 20 })
//     ) {
//       const fortyMinutesAhead = add(i, { minutes: 40 });

//       // Check if the time has already passedwor
//       const hasPassed = i < currentDateTime;
//       const isEndingTimeTaken = !existingAppointments.some((appointment) =>
//         isSameMinute(appointment, fortyMinutesAhead)
//       );
//       const isTimeTaken =
//         hasPassed ||
//         existingAppointments.some((appointmentTime) =>
//           isSameMinute(appointmentTime, i)
//         );
//       console.log(
//         "Ending Time: " + isEndingTimeTaken + " | " + i.toString().slice(16, 25)
//       );
//       appointments.push({ time: i, isEndingTimeTaken, isTimeTaken });
//     }
//     return appointments;
//   };

//   const appointments = generateAppointments();

//   const handleAppointmentCreation = async (
//     time: Date,
//     age_range: string,
//     typeEye: string,
//     name: string,
//     lastName: string,
//     phoneNumber: string
//   ) => {
//     try {
//       await createAppointmentFunc(
//         time,
//         age_range,
//         typeEye,
//         name,
//         lastName,
//         phoneNumber
//       );
//       void router.push(
//         `/success?appointmentDate=${encodeURIComponent(time.toISOString())}`
//       );
//     } catch (error) {
//       console.error("Appointment creation failed:", error);
//       // Handle the error as needed, e.g., show an error message to the user.
//     }
//   };

//   const getAllActiveHours: number[] = [];
//   for (let i = openingHours; i <= closingHours; i++) {
//     getAllActiveHours.push(i);
//   }

//   return (
//     <div className={styles.calendarMain}>
//       {date.justDate ? (
//         <>
//           <div className={styles.viewAvailableHoursHeading}>
//             <button
//               className={styles.buttonBack}
//               onClick={() => setDate({ justDate: null, dateTime: null })}>
//               ← Назад
//             </button>
//             <div>
//               <h1>{formatDateToWords(date.justDate)}</h1>
//               <h3> Първичен преглед</h3>
//             </div>
//           </div>
//           <div className={styles.buttonContainer}>
//             <div className={styles.calendarHours}>
//               {getAllActiveHours.map((hour) => (
//                 <div className={styles.calendarHour} key={hour}>
//                   <h1>{hour}</h1>
//                 </div>
//               ))}
//             </div>

//             <div>
//               {appointments?.map((timeObj, i) => {
//                 const { time, isEndingTimeTaken, isTimeTaken } = timeObj;
//                 return (
//                   <div key={`time-${i}`} className="hour">
//                     <button
//                       type="button"
//                       onClick={() => {
//                         setDate((prev) => ({ ...prev, dateTime: time }));
//                         void handleAppointmentCreation(
//                           time,
//                           age_range,
//                           typeEye,
//                           name,
//                           lastName,
//                           phoneNumber
//                         );
//                         console.log("Ending Time: " + isEndingTimeTaken);
//                       }}
//                       disabled={isTimeTaken || !isEndingTimeTaken}>
//                       {format(time, "kk:mm")}
//                     </button>
//                     <ToastContainer />
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </>
//       ) : (
//         <CalendarBase
//           onSelectDate={(selectedDate) =>
//             setDate({ justDate: selectedDate, dateTime: null })
//           }
//         />
//       )}
//     </div>
//   );
// };

// export default CalendarPrimary;
