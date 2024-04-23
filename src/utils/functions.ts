import supabase from "~/constants/supaClient";
import { PostgrestError, PostgrestSingleResponse, User } from "@supabase/supabase-js";
import { add, format } from "date-fns";
import { toast } from "react-toastify";
import { Appointment, Patient } from "./interfaces";
import { Dispatch, SetStateAction } from "react";
import { useState, useEffect } from "react";

interface HoursManagementData {
  openingHours: number;
  closingHours: number;
  openingMinutes: number;
  closingMinutes: number;
}
//Non-exportable functions
//===========================================================================================
const createPatient = async (
  name: string,
  lastName: string,
  phoneNumber: string
) => {
  let patient_id = null;
  await (
    supabase
      .from("Patients")
      .upsert([{ name: name, lastName: lastName, phone_nr: phoneNumber }], {
        onConflict: "phone_nr",
      })
      .select("*") as unknown as Promise<{
      data: Patient[];
      error: PostgrestError;
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

const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const appointmentsOverlapNotification = () =>
  toast.error("Избраният час не е свободен", {
    position: "top-center",
    autoClose: 4000,
    pauseOnHover: false,
  });

//Functions
//===========================================================================================

// Feteches appointments that are in the database
export async function getExistingAppointments(
  date: Date,
  typeEye: string,
  age_range: string
): Promise<Date[]> {
  const formattedSelectedDate = format(date, "yyyy-MM-dd");

  try {
    const { data, error }: PostgrestSingleResponse<Appointment[]> =
      await supabase
        .from("Appointments")
        .select("date")
        .gte("date", formattedSelectedDate)
        .order("date");

    if (error) {
      console.error("Error fetching existing appointments:", error);
      return [];
    } else {
      const existingDates = data.map(
        (appointment: { date: Date }) => new Date(appointment.date)
      );
      return existingDates;
    }
  } catch (error) {
    console.error("Error in fetchExistingAppointments:", error);
    return [];
  }
}

//Creates an appointment
export async function createAppointmentFunc(
  appointmentTime: Date,
  age_range: string,
  typeEye: string,
  name: string,
  lastName: string,
  phoneNumber: string,
  timeBetweenNextAppointment?: string
) {
  const patient_id = await createPatient(name, lastName, phoneNumber);

  let appointmentData: Appointment[];

  //If the appointment type is primary, then a second appointment will be created.
  //The exact time of the second appointment depends on a two thing:
  //1.The age range of the patient (under or over 25)
  //2.Only if they are under 25, the time between the appointments of other patients
  switch (typeEye) {
    case "Purvichen":
      let nextAppointmentDate = new Date();
      switch (age_range) {
        case "Nad":
          nextAppointmentDate = add(appointmentTime, { minutes: 40 });
          break;
        case "Pod":
          console.log("time from function: " + timeBetweenNextAppointment);
          switch (timeBetweenNextAppointment) {
            case "1h20":
              nextAppointmentDate = add(appointmentTime, {
                hours: 1,
                minutes: 20,
              });
              console.log("function case: 1h20");
              break;
            case "1h40":
              nextAppointmentDate = add(appointmentTime, {
                hours: 1,
                minutes: 40,
              });
              console.log("function case: 1h40");
              break;
            case undefined:
              nextAppointmentDate = add(appointmentTime, {
                hours: 1,
                minutes: 20,
              });
              console.log("Appointment ending time is undefined");
              break;
            default:
              console.error("Invalid appointment ending time");
              console.log("case default");
              return;
          }
          break;
      }
      appointmentData = [
        {
          date: appointmentTime,
          age_range: age_range,
          type: typeEye,
          patient_id: patient_id,
        },
        {
          date: nextAppointmentDate,
          age_range: age_range,
          type: typeEye,
          patient_id: patient_id,
        },
      ];
      break;

    case "Vtorichen":
      appointmentData = [
        {
          date: appointmentTime,
          age_range: age_range,
          type: typeEye,
          patient_id: patient_id,
        },
      ];
      break;

    default:
      console.error("Invalid appointment type");
      return;
  }

  (
    supabase
      .from("Appointments")
      .upsert(appointmentData) as unknown as Promise<{
      data: Appointment;
      error: Error;
    }>
  )
    .then(({ data, error }) => {
      if (error) {
        console.error("Error creating appointment:", error);
        appointmentsOverlapNotification();
      } else {
        console.log("Appointment created successfully:", data);
      }
    })
    .catch((error) => {
      console.error("Error creating appointment:", error);
    });
}

// Formats date to words
export function formatDateToWords(date: Date) {
  const day = date.getDate();
  const month = capitalizeFirstLetter(
    date.toLocaleString("bg-BG", { month: "long" })
  );
  const dayName = capitalizeFirstLetter(
    date.toLocaleString("bg-BG", { weekday: "long" })
  );

  return `${day} ${month} (${dayName})`;
}

//Gets data for opening and closing hours and minutes
export async function getHoursManagementData(
  type: string
): Promise<HoursManagementData | null> {
  try {
    const { data, error } = await supabase
      .from("HoursManagement")
      .select("openingHours, closingHours, openingMinutes, closingMinutes")
      .eq("id", 1)
      .single();

    if (error) {
      throw error;
    }
    if (data) {
      if (type === "basic") {
        return data ?? null;
      }
      if (type === "primary") {
        const hoursForPrimary = {
          ...data,
          closingHours: data.closingHours - 1,
        };
        return hoursForPrimary ?? null;
      }
      if (type === "primaryYouth") {
        let modifiedClosingMinutes: number = data.closingMinutes as number;
        let modifiedClosingHours: number = data.closingHours as number;
        switch (data.closingMinutes) {
          case 30:
            modifiedClosingMinutes = 50;
            modifiedClosingHours = data.closingHours - 2;
            break;
          case 20:
            modifiedClosingMinutes = 40;
            modifiedClosingHours = data.closingHours - 2;
            break;
          case 10:
            modifiedClosingMinutes = 30;
            modifiedClosingHours = data.closingHours - 2;
            break;
          case 0:
            modifiedClosingMinutes = 20;
            modifiedClosingHours = data.closingHours - 2;
            break;
          case 50:
            modifiedClosingMinutes = 10;
            modifiedClosingHours = data.closingHours - 1;
            break;
          case 40:
            modifiedClosingMinutes = 0;
            modifiedClosingHours = data.closingHours - 1;
            break;
        }
        const primaryYouth = {
          ...data,
          closingMinutes: modifiedClosingMinutes,
          closingHours: modifiedClosingHours,
        };
        return primaryYouth ?? null;
      }
      if (type === "secondary") {
        let modifiedClosingMinutes: number = data.closingMinutes as number;
        let modifiedClosingHours: number = data.closingHours as number;
        switch (data.closingMinutes) {
          case 30:
            modifiedClosingMinutes = 10;
            break;
          case 20:
            modifiedClosingMinutes = 0;
            break;
          case 10:
            modifiedClosingMinutes = 50;
            break;
          case 0:
            modifiedClosingMinutes = 40;
            break;
          case 50:
            modifiedClosingMinutes = 30;
            break;
          case 40:
            modifiedClosingMinutes = 20;
            break;
        }
        if (data.closingMinutes === 10 || data.closingMinutes === 20) {
          modifiedClosingHours -= 1;
        }
        const hoursForSecondary = {
          ...data,
          closingMinutes: modifiedClosingMinutes,
          closingHours: modifiedClosingHours,
        };
        return hoursForSecondary ?? null;
      }
    }
    return null;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

// Update the "missed" field in the "Patients" table for the specified patient
export async function setAppointmentAsMissed(
  patientId: number,
  missed_date: Date
): Promise<void> {
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
}

// Update the database to delete the specified appointment

export async function deleteAppointment(
  index: number,
  appointments: Appointment[]
): Promise<void> {
  const appointmentToDelete = appointments[index];

  if (!appointmentToDelete) {
    console.error("Appointment to delete is undefined");
    return;
  }

  try {
    switch (appointmentToDelete.type) {
      case "Purvichen":
        await deletePurvichenAppointment(index, appointments);
        break;

      case "Vtorichen":
        await deleteVtorichenAppointment(index, appointments);
      default:
        console.error("Unknown appointment type:", appointmentToDelete.type);
        return;
        break;
    }
  } catch (error) {
    console.error("Error deleting appointment:", error);
  }
}

export async function deleteVtorichenAppointment(
  index: number,
  appointments: Appointment[]
): Promise<void> {
  const appointmentToDelete = appointments[index];

  if (!appointmentToDelete) {
    console.error("Appointment to delete is undefined");
    return;
  }
  const utcDateToDelete = appointmentToDelete.date.toISOString();

  try {
    const { error } = await supabase
      .from("Appointments")
      .delete()
      .eq("date", utcDateToDelete);

    if (error) {
      console.error("Error deleting appointment:", error);
      console.log("Date before sending to Supabase:", appointmentToDelete.date);
    } else {
      console.log("Appointment deleted successfully");
    }
  } catch (error) {
    console.error("Error deleting appointment:", error);
  }
}

export async function deletePurvichenAppointment(
  index: number,
  appointments: Appointment[]
): Promise<void> {
  const appointmentToDelete = appointments[index];

  if (!appointmentToDelete) {
    console.error("Appointment to delete is undefined");
    return;
  }
  try {
    const appointmentsToDelete = await getPairAppointmentsToDelete(
      appointmentToDelete
    );

    for (const appointment of appointmentsToDelete) {
      const { error } = await supabase
        .from("Appointments")
        .delete()
        .eq("id", appointment.id);

      if (error) {
        console.error("Error deleting appointment:", error);
      } else {
        console.log("Appointment deleted successfully");
      }
    }
  } catch (error) {
    console.error("Error deleting appointment:", error);
  }
}

// Function to get appointments to delete
async function getPairAppointmentsToDelete(
  appointmentToDelete: Appointment
): Promise<Appointment[]> {
  const dateToDelete = new Date(appointmentToDelete.date);
  const year = dateToDelete.getFullYear();
  const month = dateToDelete.getMonth();
  const day = dateToDelete.getDate();

  const utcStartOfDay = new Date(Date.UTC(year, month, day));
  const utcEndOfDay = new Date(Date.UTC(year, month, day + 1));

  try {
    // Fetch appointments for the given date
    const { data: appointmentsOnDate, error: fetchError } = await supabase
      .from("Appointments")
      .select()
      .gte("date", utcStartOfDay.toISOString())
      .lt("date", utcEndOfDay.toISOString());

    if (fetchError) {
      console.error("Error fetching appointments:", fetchError);
      return [];
    }

    // The whole purpose of this is type gynmastics
    const typedAppointmentsOnDate: Appointment[] =
      (appointmentsOnDate as Appointment[]) || [];

    // Filter appointments with the same patient ID for that day
    const appointmentsToDelete = typedAppointmentsOnDate.filter(
      (appointment) =>
        appointment.patient_id === appointmentToDelete.patient_id &&
        appointment.type === "Purvichen" &&
        appointment.id !== appointmentToDelete.id // Exclude the appointment to delete itself
    );

    return appointmentsToDelete;
  } catch (error) {
    console.error("Error getting appointments to delete:", error);
    return [];
  }
}

export function handleLogoClick() {
  return window.location.reload();
}

export function handleMenuClick(setIsSidebarOpen: Dispatch<SetStateAction<boolean>>) {
  setIsSidebarOpen(prevState => !prevState);
};

export function getSidebarStyle(isSidebarOpen: boolean) {
  return {
    display: isSidebarOpen ? 'block' : 'none',
  };
};


export async function fetchUser(setUser: Dispatch<SetStateAction<User | null>>):Promise<void> {
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) {
    console.error("Error fetching user:", error);
  } else {
    setUser(user);
  }
};

export async function checkPatientAppointments(phoneNumberInput: string,setSecAppointmentActive: React.Dispatch<React.SetStateAction<boolean>>) {
  const patientId = await supabase.rpc("check_if_customer_is_present_in_db", {phone_number_input: phoneNumberInput});
  const lastMonthDataNum = await supabase.rpc("get_primary_appointments_count_for_the_last_30_days", {patient_id_input: patientId.data});

  if(lastMonthDataNum.data > 0){
    setSecAppointmentActive(true)
  } else {
    setSecAppointmentActive(false)
  }
}