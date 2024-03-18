export interface Appointment {
  id?: number;
  date: Date;
  age_range?: string;
  type?: string;
  patient_id?: number | null;
}

export interface AppointmentForTablo {
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

export interface Patient {
  id: number;
  name: string;
  phone_nr: string;
  missed?: boolean;
  missed_date: Date;
}
