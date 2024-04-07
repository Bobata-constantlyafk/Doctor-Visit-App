import { FC, useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "./Success.module.scss";
import Link from "next/link";

const Success: FC = () => {
  const router = useRouter();
  const { openingHoursUpdated } = router.query;
  const { closingHoursUpdated } = router.query;
  const { openingMinutesUpdated } = router.query;
  const { closingMinutesUpdated } = router.query;
  const { time } = router.query;
  const { successType } = router.query;

  const [headerText, setHeaderText] = useState(
    "Error: success type has not been defined"
  );
  const [subHeaderText, setSubHeaderText] = useState(
    "Error: success type has not been defined"
  );

  useEffect(() => {
    switch (successType) {
      case "hours":
        setHeaderText(`Успешно\n актуализиране\n на работните часове`);
        setSubHeaderText(
          `От ${
            typeof openingHoursUpdated === "string" ? openingHoursUpdated : ""
          }:${
            typeof openingMinutesUpdated === "string"
              ? openingMinutesUpdated
              : ""
          } до ${
            typeof closingHoursUpdated === "string" ? closingHoursUpdated : ""
          }:${
            typeof closingMinutesUpdated === "string"
              ? closingMinutesUpdated
              : ""
          }`
        );
        console.log("updated for hours");
        break;
      case "appointment":
        setHeaderText("Успешно запазихте час");
        setSubHeaderText(getFormattedDate(new Date(parseDate)));
        console.log("updated for appointment");
        break;
      default:
        setHeaderText("Success type has not been defined");
        break;
    }
  }, []);

  const parseDate = time ? String(time) : "";
  function getFormattedDate(date: Date) {
    const capitalizeFirstLetter = (str: string) => {
      return str.charAt(0).toUpperCase() + str.slice(1);
    };

    const day = date.getDate();
    const month = capitalizeFirstLetter(
      date.toLocaleString("bg-BG", { month: "long" })
    );
    const dayName = capitalizeFirstLetter(
      date.toLocaleString("bg-BG", { weekday: "long" })
    );
    return `${day} ${month} (${dayName})`;
  }

  function getHour(date: Date) {
    const hour = date.getHours();
    const minutes = date.getMinutes();

    return `за ${hour}:${minutes}`;
  }

  return (
    <div className={styles.successMain}>
      <div className={styles.success}>
        <div>
          <h1 lang="bg"> {headerText}</h1>
          <hr />
          <h2 lang="bg">{subHeaderText}</h2>
          {successType === "appointment" && (
            <h3>{`${getHour(new Date(parseDate)).split(":")[0]}:${String(
              getHour(new Date(parseDate)).split(":")[1]
            ).padStart(2, "0")}`}</h3>
          )}
        </div>
        <Link className={styles.link} href="/">
          Начало
        </Link>
      </div>
    </div>
  );
};

export default Success;
