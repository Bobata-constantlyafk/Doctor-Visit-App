"use client";

import React, {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";


interface ContextProps {
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  lastName: string;
  setLastName: Dispatch<SetStateAction<string>>;
  phoneNumber: string;
  setPhoneNumber: Dispatch<SetStateAction<string>>;
  EGN: string;
  setEGN: Dispatch<SetStateAction<string>>;
  age_range: string;
  setAge_range: Dispatch<SetStateAction<string>>;
  typeEye: string;
  setTypeEye: Dispatch<SetStateAction<string>>;
  calendarState: number;
  setCalendarState: Dispatch<SetStateAction<number>>;
  isSelectionMade: boolean;
  setIsSelectionMade: Dispatch<SetStateAction<boolean>>;
}

const GlobalContext = createContext<ContextProps>({
  name: "",
  setName: (): string => "",
  lastName: "",
  setLastName: (): string => "",
  phoneNumber: "",
  setPhoneNumber: (): string => "",
  EGN: "",
  setEGN: (): string => "",
  age_range: "",
  setAge_range: (): string => "",
  typeEye: "",
  setTypeEye: (): string => "",
  calendarState: 0,
  setCalendarState: (): number => 0,
  isSelectionMade: false,
  setIsSelectionMade: (): boolean => false,
});

export const GlobalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [EGN, setEGN] = useState("");
  const [age_range, setAge_range] = useState("");
  const [typeEye, setTypeEye] = useState("");
  const [calendarState, setCalendarState] = useState(0);
  const [isSelectionMade, setIsSelectionMade] = useState(false);
  return (
    <GlobalContext.Provider
      value={{
        name,
        setName,
        lastName,
        setLastName,
        phoneNumber,
        setPhoneNumber,
        EGN,
        setEGN,
        age_range,
        setAge_range,
        typeEye,
        setTypeEye,
        calendarState,
        setCalendarState,
        isSelectionMade,
        setIsSelectionMade,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
