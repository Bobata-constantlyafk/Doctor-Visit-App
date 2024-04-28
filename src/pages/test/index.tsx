import React from "react";
import BulkGate from "~/components/BulkGate";

export default function SupaBase() {
  return (
    <>
      <BulkGate />
    </>
  );
}

// import React from "react";
// import { useState } from "react";
// import useBulkGate from "../../../bulkGate.js";

// function YourComponent() {
//   const [number, setNumber] = useState("");
//   const [message, setMessage] = useState("");

//   const { mutate, isLoading, isError, error } = useBulkGate();

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     try {
//       await mutate({
//         application_id: "<APPLICATION_ID>",
//         application_token: "<APPLICATION_TOKEN>",
//         number,
//         text: message,
//         sender_id: "gText",
//         sender_id_value: "BulkGate",
//       });
//       console.log("Message sent successfully");
//     } catch (error) {
//       console.error("Failed to send message", error as Error);
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Phone number"
//           value={number}
//           onChange={(e) => setNumber(e.target.value)}
//         />
//         <textarea
//           placeholder="Message"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//         />
//         <button type="submit" disabled={isLoading}>
//           {isLoading ? "Sending..." : "Send Message"}
//         </button>
//       </form>
//       {isError && <div>Error: {(error as Error).message}</div>}
//     </div>
//   );
// }
