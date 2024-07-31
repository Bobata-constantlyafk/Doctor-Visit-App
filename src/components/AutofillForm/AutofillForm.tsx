import React, { useState, ChangeEvent, useEffect } from "react";
import styles from "./AutofillForm.module.scss";

interface AutofillFormProps {
  closeModal: () => void;
}

const AutofillForm: React.FC<AutofillFormProps> = ({ closeModal }) => {
  const [egn, setEgn] = useState("");

  useEffect(() => {
    console.log("log: useEffect");
  }, []);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setter(e.target.value);
  };

  const onFormSubmit = async (): Promise<void> => {
    closeModal();
    console.log("yep that button workin");
  };

  return (
    <div className={styles.infoContainer}>
      <h1>Въведете ЕГН</h1>
      <div>
        <label htmlFor="phoneNumber">Тел номер:</label>
        <input
          type="tel"
          placeholder="Моля, въведете телефонен номер "
          id="phoneNumber"
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
