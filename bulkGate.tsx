// bulkGate.js (or bulkGate.ts if using TypeScript)
interface MessageData {
  application_id: string;
  application_token: string;
  number: string;
  text: string;
  sender_id: string;
  sender_id_value: string;
}

async function sendMessagez(messageData: MessageData) {
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
    throw new Error("Failed to send message, bulkGate error");
  }

  return response.json();
}

export { sendMessagez };
