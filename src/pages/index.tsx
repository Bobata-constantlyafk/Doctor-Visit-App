import Head from "next/head";
import CalendarSecondary from "../components/Calendar-Secondary";
import CalendarPrimary from "../components/Calendar-Primary";
import InfoForm from "~/components/InfoForm";
import { useState } from "react";
import { GlobalContextProvider } from "~/constants/store";

export default function Home() {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedChoice, setSelectedChoice] = useState("");

  const handleFormSubmission = (choice: string) => {
    setShowCalendar(true);
    setSelectedChoice(choice);
  };

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <GlobalContextProvider>
        <main>
          {showCalendar ? (
            selectedChoice === "Purvichen" ? (
              <CalendarPrimary />
            ) : (
              <CalendarSecondary />
            )
          ) : (
            <InfoForm onFormSubmit={handleFormSubmission} />
          )}
        </main>
      </GlobalContextProvider>
    </>
  );
}
