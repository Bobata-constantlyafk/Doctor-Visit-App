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
  const [user, setUser] = useState<any>(null);

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

    async function getUserData() {
      await supabase.auth
        .getUser()
        .then((value) => {
          if (value.data?.user) {
            setUser(value.data.user);
            void fetchMissedPatients();
            console.log("User: ", value.data.user);
          }
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    }

    getUserData();
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
        // Update the local state with the new data
        setMissedPatients((prevPatients) =>
          prevPatients.map((patient) =>
            patient.id === patientId ? { ...patient, missed: false } : patient
          )
        );

        console.log("Missed status updated successfully");
      }
    } catch (error) {
      console.error("Error updating missed status:", error);
    }
  };

  const formatDate = (date: string) => {
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
      {/* If logged in */}
      {user ? (
        <>
          <h1>Пропуснати часове</h1>
          <div className={styles.infoMain}>
            <div className={styles.infoHeader}>
              <h2>Име</h2>
              <h2>Телефонен номер</h2>
              <h2>Дата</h2>
              <h2 className={styles.paid}>Статус</h2>
            </div>
            {missedPatients.map((patient) => (
              <>
                <div className={styles.info} key={patient.id}>
                  <p>{patient.name}</p>
                  <p>{patient.phone_nr}</p>
                  <p>{formatDate(patient.missed_date)}</p>
                  <button onClick={() => void setAppointmentAsPaid(patient.id)}>
                    Решен
                  </button>
                </div>
                <hr />
              </>
            ))}
          </div>
        </>
      ) : (
        <h1>Mоля, влезте в акаунта си!</h1>
      )}
    </div>
  );
};

export default Missed;
