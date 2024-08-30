import React, { useState } from "react";
import AutofillForm from "~/components/AutofillForm";
import InfoFormModal from "~/components/InfoFormModal";
import { useGlobalContext } from "~/utils/store";

export default function SupaBase() {
  const [patientInfo, setPatientInfo] = useState(null);

  const handlePatientInfoUpdate = (info: any) => {
    setPatientInfo(info);
  };

  const dummyAppointmentDateTime = new Date(); // Placeholder for actual appointment date/time
  const dummyCloseModal = () => console.log("Modal closed"); // Placeholder for close modal function
  const dummyGetAllAppointments = (): Promise<void> => {
    return new Promise((resolve) => {
      console.log("Fetching all appointments");
      resolve();
    });
  };

  return (
    <>
      {!patientInfo ? (
        <AutofillForm onPatientInfoUpdate={handlePatientInfoUpdate} />
      ) : (
        <InfoFormModal
          appoinmentDateTime={dummyAppointmentDateTime}
          closeModal={dummyCloseModal}
          getAllAppointments={dummyGetAllAppointments}
        />
      )}
    </>
  );
}
