import Head from "next/head";
import DateBookingManager from "~/components/DateBookingManager";
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
            <DateBookingManager />
          ) : (
            <InfoForm onFormSubmit={handleFormSubmission} />
          )}
        </main>
      </GlobalContextProvider>
    </>
  );
}
