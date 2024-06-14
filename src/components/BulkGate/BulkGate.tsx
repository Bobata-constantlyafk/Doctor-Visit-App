import React, { FC, useEffect, useState } from "react";
import useBulkGate from "../../../bulkGate";
import {
  getAppointmentsForTomorrow,
  getPhoneNumbersById,
  formatAsInternationalNumber,
} from "~/utils/functions";
import styles from "./BulkGate.module.scss";

const BulkGate: FC = () => {
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [formattedNumbers, setFormattedNumbers] = useState<string[]>([]);

  const { mutate, isLoading, isError, error } = useBulkGate();

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const tomorrowAppointments: BigInteger[] =
          await getAppointmentsForTomorrow();
        const numbersToBeTexted: string[] = await getPhoneNumbersById(
          tomorrowAppointments
        );
        const getFormattedNumbers: string[] =
          formatAsInternationalNumber(numbersToBeTexted);
        setFormattedNumbers(getFormattedNumbers);

        console.log("get numbers to be texted: ", getFormattedNumbers);
        // sendMessage(getFormattedNumbers);
      } catch (error) {
        console.error("Failed to fetch appointments or format numbers", error);
      }
    };

    void fetchAppointments();
  }, []);

  function sendMessage(numbers: string[]) {
    try {
      console.log("BulkGate, in the sendMessage");
      if (numbers.length === 0) {
        console.warn("No numbers to send messages to.");
        return;
      }
      for (const number of numbers) {
        mutate({
          application_id: "32502",
          application_token:
            "yBCg91fjSoPhUai76v5Kb2BnIWwTlTQeG66qdURgrRzkS1bmGw",
          number: number,
          text: "Zdraveite, utre imate zapazen chas pri D-r Pravchev",
          sender_id: "gText",
          sender_id_value: "Dr Pravchev",
        });
      }
      console.log("Message sent successfully");
    } catch (error) {
      console.error("Failed to send message", error as Error);
    }
  }

  return (
    <>
      <p>Bababoe</p>
    </>
  );
};

export default BulkGate;
