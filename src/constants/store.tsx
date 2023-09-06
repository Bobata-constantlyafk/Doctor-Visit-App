"use client";

import React, {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

type DataType = {
  name: string;
  phoneNumber: string;
};

interface ContextProps {
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  phoneNumber: string;
  setPhoneNumber: Dispatch<SetStateAction<string>>;
  age_range: string;
  setAge_range: Dispatch<SetStateAction<string>>;
  typeEye: string;
  setTypeEye: Dispatch<SetStateAction<string>>;
}

const GlobalContext = createContext<ContextProps>({
  name: "",
  setName: (): string => "",
  phoneNumber: "",
  setPhoneNumber: (): string => "",
  age_range: "",
  setAge_range: (): string => "",
  typeEye: "",
  setTypeEye: (): string => "",
});

export const GlobalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [age_range, setAge_range] = useState("");
  const [typeEye, setTypeEye] = useState("");
  return (
    <GlobalContext.Provider
      value={{
        name,
        setName,
        phoneNumber,
        setPhoneNumber,
        age_range,
        setAge_range,
        typeEye,
        setTypeEye,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
