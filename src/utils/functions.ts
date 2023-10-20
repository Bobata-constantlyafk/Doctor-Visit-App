import supabase from "~/constants/supaClient";
import { PostgrestError } from "@supabase/supabase-js";
import { format } from "date-fns";

//Interfaces
//===========================================================================================
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

//Functions
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

export async function createAppointmentFunc(
  dateTime: Date,
  age_range: string,
  typeEye: string,
  name: string,
  lastName: string,
  phoneNumber: string
) {
  const formattedDate = format(dateTime, "yyyy-MM-dd HH:mm");
  console.log(formattedDate);
  const patient_id = await createPatient(name, lastName, phoneNumber);
  (
    supabase.from("Appointments").insert([
      {
        date: formattedDate,
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
      }
    })
    .catch((error) => {
      console.error("Error creating appointment:", error);
    });
}

const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

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


