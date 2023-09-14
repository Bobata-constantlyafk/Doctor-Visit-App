// const createPatient = async () => {
//   const { data, error } = await (
//     supabase
//       .from("Patients")
//       .upsert([{ name: name, phone_nr: phoneNumber }], {
//         onConflict: "phone_nr",
//       })
//       .select("*") as unknown as Promise<{}>
//   )
//     .then(({ data, error }) => {
//       if (error) {
//         console.error("Error creating appointment:", error);
//       } else {
//         const patient = data[0];

//         console.log("Patient id form 1:", patient.id);
//         console.log("Appointment created successfully:", data);
//       }
//     })
//     .catch((error) => {
//       console.error("Error creating appointment:", error);
//     });

//   if (error) {
//     console.error("Error creating patient:", error);
//     return null;
//   }

//   if (data) {
//     console.log("Data from Supabase:", data);

//     return patient.id;
//   } else {
//     console.error("No data received from Supabase.");
//     return null;
//   }
// };
