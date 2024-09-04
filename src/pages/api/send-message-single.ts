import { NextApiRequest, NextApiResponse } from "next";
import { formatAsInternationalNumber } from "~/utils/functions";
import { sendMessagez } from "bulkGate";
import format from "date-fns-tz/format";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method Not Allowed" });
    return;
  }

  const { phoneNumber, appointmentTimeFormated } = req.body;

  if (!phoneNumber || !appointmentTimeFormated) {
    res
      .status(400)
      .json({ message: "Phone number and appointment time are required" });
    return;
  }
  const formatNumber = async () => {
    try {
      const getFormattedNumbers = formatAsInternationalNumber([phoneNumber]);
      const formattedNumber = getFormattedNumbers[0];

      if (!formattedNumber) {
        throw new Error("Formatted number is undefined");
      }

      await sendMessageSingle(formattedNumber);
    } catch (error) {
      console.error("Failed to fetch appointments or numbers", error);
      res
        .status(500)
        .json({ message: "Failed to fetch appointments or numbers" });
    }
  };

  await formatNumber();

  async function sendMessageSingle(number: string) {
    try {
      if (!number) {
        console.warn("No numbers to send messages to.");
        return;
      }

      await sendMessagez({
        application_id: "32502",
        application_token: String(process.env.NEXT_PUBLIC_BULK_GATE_KEY),
        number: number,
        text: `Zdraveite, imate zapazen chas pri D-r Pravchev na ${appointmentTimeFormated}`,
        sender_id: "gText",
        sender_id_value: "Dr Pravchev",
      });

      res.status(200).json({ message: "Messages sent successfully | API" });
    } catch (error) {
      console.error("Failed to send message", error);
      res
        .status(500)
        .json({ message: "Failed to send message, api error | API" });
    }
  }
}
