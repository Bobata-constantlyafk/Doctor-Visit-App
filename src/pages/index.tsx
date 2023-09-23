import Head from "next/head";
import CalendarSecondary from "../components/Calendar-Secondary";
import CalendarPrimary from "../components/Calendar-Primary";
import CalendarSecondaryYouth from "~/components/Calendar-Secondary-Youth";
import InfoForm from "~/components/InfoForm";
import { useState } from "react";
import { GlobalContextProvider } from "~/constants/store";

export default function Home() {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedType, setSelectedType] = useState("");
  const [selectedAge, setSelectedAge] = useState("");

  const handleFormSubmission = (choiceType: string, choiceAge: string) => {
    setShowCalendar(true);
    setSelectedType(choiceType);
    setSelectedAge(choiceAge);
  };

  return (
    <>
      <Head>
        <title>Oчни Прегледи График</title>
        <meta
          name="description"
          content="Очни прегледи от д-р Пръвчев, Варна и Суворово"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <GlobalContextProvider>
        <main>
          {showCalendar ? (
            selectedType === "Vtorichen" ? (
              selectedAge === "Pod" ? (
                <CalendarSecondaryYouth />
              ) : (
                <CalendarSecondary />
              )
            ) : (
              <CalendarPrimary />
            )
          ) : (
            <InfoForm onFormSubmit={handleFormSubmission} />
          )}
        </main>
      </GlobalContextProvider>
    </>
  );
}
