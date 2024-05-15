import React, { FC, FormEvent, useEffect } from "react";
import { useState } from "react";
import useBulkGate from "../../../bulkGate";
import {
  getAppointmentsForTomorrow,
  getPhoneNumbersById,
} from "~/utils/functions";
import styles from "./BulkGate.module.scss";

const BulkGate: FC = () => {
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  const { mutate, isLoading, isError, error } = useBulkGate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await mutate({
        application_id: "32502",
        application_token: "yBCg91fjSoPhUai76v5Kb2BnIWwTlTQeG66qdURgrRzkS1bmGw",
        number: "00359878940259",
        text: message,
        sender_id: "gText",
        sender_id_value: "Dr Pravchev",
      });
      console.log("Message sent successfully");
    } catch (error) {
      console.error("Failed to send message", error as Error);
    }
  };

  useEffect(() => {
    const fetchAppointments = async () => {
      const themDates = await getAppointmentsForTomorrow();
      console.log("them dates mane: ", themDates);
      const themNumbers = await getPhoneNumbersById(themDates);
      console.log("them numbers mane: ", themNumbers);
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
