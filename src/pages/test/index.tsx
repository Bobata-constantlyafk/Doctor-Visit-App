import React, { FC, useEffect, useState } from "react";
import { sendMessagez } from "bulkGate";
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

  // const { mutate, isLoading, isError, error } = useBulkGate();

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
      } catch (error) {
        console.error("Failed to fetch appointments or numbers", error);
      }
    };

    void fetchAppointments();
  }, []);

  return (
    <>
      <p>Popaya</p>
    </>
  );
};

export default BulkGate;
