import { NextApiRequest, NextApiResponse } from "next";
import {
  getAppointmentsForTomorrow,
  getPhoneNumbersById,
  formatAsInternationalNumber,
} from "~/utils/functions";
import { sendMessagez } from "bulkGate";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method Not Allowed" });
    return;
  }

  const fetchAppointments = async () => {
    try {
      const tomorrowAppointments = await getAppointmentsForTomorrow();
      const numbersToBeTexted = await getPhoneNumbersById(tomorrowAppointments);
      const getFormattedNumbers =
        formatAsInternationalNumber(numbersToBeTexted);

      console.log("get numbers to be texted: ", getFormattedNumbers);
      await sendMessageBulk(getFormattedNumbers);
    } catch (error) {
      console.error("Failed to fetch appointments or numbers", error);
      res
        .status(500)
        .json({ message: "Failed to fetch appointments or numbers" });
    }
  };

  await fetchAppointments();

  async function sendMessageBulk(numbers: string[]) {
    try {
      console.log("BulkGate, in the sendMessage");
      if (numbers.length === 0) {
        console.warn("No numbers to send messages to.");
        return;
      }
      for (const number of numbers) {
        await sendMessagez({
          application_id: "32502",
          application_token: String(process.env.NEXT_PUBLIC_BULK_GATE_KEY),
          number: number,
          text: "Zdraveite, utre imate zapazen chas pri D-r Pravchev",
          sender_id: "gText",
          sender_id_value: "Dr Pravchev",
        });
      }
      console.log("Message sent successfully");
      res.status(200).json({ message: "Messages sent successfully" });
    } catch (error) {
      console.error("Failed to send message", error);
      res.status(500).json({ message: "Failed to send message, api error" });
    }
  }
}
