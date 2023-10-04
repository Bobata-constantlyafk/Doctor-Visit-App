import supabase from "~/constants/supaClient";
import { PostgrestError } from "@supabase/supabase-js";
import { format } from "date-fns";

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

const createPatient = async (name: string, phoneNumber: string) => {
  let patient_id = null;
  await (
    supabase
      .from("Patients")
      .upsert([{ name: name, phone_nr: phoneNumber }], {
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
  phoneNumber: string
) {
  const formattedDate = format(dateTime, "yyyy-MM-dd HH:mm");
  const patient_id = await createPatient(name, phoneNumber);
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
