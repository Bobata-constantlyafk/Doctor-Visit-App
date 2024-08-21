import React, { useState, ChangeEvent, useEffect } from "react";
import styles from "../InfoFormModal/InfoFormModal.module.scss";
import { getPatientInfoByEgn } from "~/utils/functions";
import { Patient } from "~/utils/interfaces";

interface AutofillFormProps {
  onPatientInfoUpdate: (info: Patient | null) => void;
}

const AutofillForm: React.FC<AutofillFormProps> = ({ onPatientInfoUpdate }) => {
  const [egn, setEgn] = useState("");

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setter(e.target.value);
  };

  const onFormSubmit = async (): Promise<void> => {
    const patientInfo = await getPatientInfoByEgn(egn);
    console.log("Patient info Autofill: " + JSON.stringify(patientInfo));
    onPatientInfoUpdate(patientInfo);
    // Need to figure out a way how once this is submitted it will trigger the next form to save the data
  };

  return (
    <div className={styles.infoContainer}>
      <h1>Въведете ЕГН</h1>
      <div>
        <label htmlFor="e=EGN">ЕГН:</label>
        <input
          type="tel"
          placeholder="Моля, въведете телефонен номер "
          id="EGN"
          value={egn}
          pattern="[0-9]*"
          inputMode="tel"
          onChange={(e) => handleInputChange(e, setEgn)}
        />
      </div>
      <button type="button" onClick={() => void onFormSubmit()}>
        Напред →
      </button>
    </div>
  );
};

export default AutofillForm;
