import React, { FC, FormEvent, useEffect } from "react";
import { useState } from "react";
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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      console.log("BulkGate, in the handleSubmit");
      if (formattedNumbers.length === 0) {
        console.warn("No numbers to send messages to.");
        return;
      }
      for (const number of formattedNumbers) {
        await mutate({
          application_id: "32502",
          application_token:
            "yBCg91fjSoPhUai76v5Kb2BnIWwTlTQeG66qdURgrRzkS1bmGw",
          number: number,
          text: "Testing messages",
          sender_id: "gText",
          sender_id_value: "Dr Pravchev",
        });
      }
      console.log("Message sent successfully");
    } catch (error) {
      console.error("Failed to send message", error as Error);
    }
  };

  useEffect(() => {
    const fetchAppointments = async () => {
      const tomorrowAppointments = await getAppointmentsForTomorrow();
      const numbersToBeTexted = await getPhoneNumbersById(tomorrowAppointments);
      const getFormattedNumbers = await formatAsInternationalNumber(
        numbersToBeTexted
      );
      setFormattedNumbers(getFormattedNumbers);
      console.log("get numbers to be texted: ", getFormattedNumbers);
      console.log("numbers to be texted: ", formattedNumbers);
    };

    fetchAppointments();
  }, []);

  return (
    <>
      <p>Bababoe</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Test</button>
      </form>
    </>
  );
};

export default BulkGate;
