import React, { useEffect, useState, FC } from "react";
import supabase from "../../constants/supaClient.js";
import styles from "./Missed.module.scss";

interface Patient {
  id: number;
  name: string;
  phone_nr: string;
  missed: boolean;
  missed_date: string;
}

const Missed: FC = () => {
  const [missedPatients, setMissedPatients] = useState<Patient[]>([]);
  // const [user, setUser] = useState<any>(null);

  useEffect(() => {
    async function fetchMissedPatients() {
      const { data, error } = await supabase
        .from("Patients")
        .select("id, name, phone_nr, missed, missed_date")
        .eq("missed", true);

      if (error) {
        console.error("Error fetching missed patients:", error);
      } else {
        setMissedPatients(data || []);
      }
    }

    // async function getUserData() {
    //   await supabase.auth
    //     .getUser()
    //     .then((value) => {
    //       if (value.data?.user) {
    //         setUser(value.data.user);
    //         void fetchMissedPatients();
    //       }
    //     })
    //     .catch((error) => {
    //       console.error("Error fetching user data:", error);
    //     });
    // }

    void fetchMissedPatients();
    // getUserData();
  }, []);

  const setAppointmentAsPaid = async (patientId: number) => {
    try {
      const { data, error } = await supabase
        .from("Patients")
        .update({ missed: false })
        .eq("id", patientId);

      if (error) {
        console.error("Error updating missed status:", error);
      } else {
        setMissedPatients((prevPatients) =>
          prevPatients.filter((patient) => patient.id !== patientId)
        );
        console.log("Missed status updated successfully");
      }
    } catch (error) {
      console.error("Error updating missed status:", error);
    }
  };

  const formatDateAndHour = (date: string) => {
    const dateObj = new Date(date);
    const day = dateObj.getDate();
    const month = dateObj.getMonth() + 1;
    const hour = dateObj.getHours();
    const minutes = dateObj.getMinutes();
    const formattedMinutes = String(minutes).padStart(2, "0");
    const year = dateObj.getFullYear();
    return `${day}/${month}/${year} ${hour}:${formattedMinutes}`;
  };

  return (
    <div className={styles.missedMain}>
      <h1>Пропуснати часове</h1>
      <div className={styles.infoMain}>
        <div className={styles.infoHeader}>
          <h2>Име</h2>
          <h2>Телефон</h2>
          <h2>Дата</h2>
          <h2 className={styles.paid}>Статус</h2>
        </div>
        {missedPatients.map((patient) => (
          <React.Fragment key={patient.id}>
            <div className={styles.info}>
              <p>{patient.name}</p>
              <p>{patient.phone_nr}</p>
              <p>{formatDateAndHour(patient.missed_date)}</p>
              <button onClick={() => void setAppointmentAsPaid(patient.id)}>
                Решен
              </button>
            </div>
            <hr />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Missed;