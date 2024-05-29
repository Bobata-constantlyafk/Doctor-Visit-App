// useBulkGate.js
import { useMutation, UseMutationOptions } from "react-query";

// To do: make interface for this (Or maybe not, because its not reused)
interface MessageData {
  application_id: string;
  application_token: string;
  number: string;
  text: string;
  sender_id: string;
  sender_id_value: string;
}
function useBulkGate() {
  const sendMessage = async (messageData: MessageData) => {
    const response = await fetch(
      "https://portal.bulkgate.com/api/1.0/simple/transactional",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(messageData),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to send message");
    }

    return response.json();
  };

  return useMutation(sendMessage);
}

export default useBulkGate;
