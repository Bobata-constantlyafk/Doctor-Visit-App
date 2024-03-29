import { FC, useState, useEffect, ChangeEvent } from "react";
import { useRouter } from "next/router";
import styles from "./Chasove.module.scss";
import { getHoursManagementData } from "~/utils/functions";
import supabase from "~/constants/supaClient";

const Chasove: FC = () => {
  const router = useRouter();
  const [hoursManagementData, setHoursManagementData] = useState({
    openingHours: 0,
    closingHours: 0,
    openingMinutes: 0,
    closingMinutes: 0,
  });
  const [openingHoursUpdated, setOpeningHoursUpdated] = useState<number>(0);
  const [closingHoursUpdated, setClosingHoursUpdated] = useState<number>(0);
  const [openingMinutesUpdated, setOpeningMinutesUpdated] = useState<number>(0);
  const [closingMinutesUpdated, setClosingMinutesUpdated] = useState<number>(0);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const successType = "hours";

  useEffect(() => {
    async function fetchHourManagementData() {
      try {
        const data = await getHoursManagementData("basic");
        if (data) {
          setHoursManagementData(data);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }

    void fetchHourManagementData();
  }, []);

  const updateHourManagementData = async (
    openingHours: number,
    closingHours: number,
    openingMinutes: number,
    closingMinutes: number
  ) => {
    try {
      const { data, error } = await supabase
        .from("HoursManagement")
        .update({
          openingHours: openingHours,
          closingHours: closingHours,
          openingMinutes: openingMinutes,
          closingMinutes: closingMinutes,
        })
        .eq("id", 1);

      if (error) {
        console.error("Error:", error);
      } else {
        console.log("Data updated successfully:", data);
        void router.push({
          pathname: "/success",
          query: {
            openingHoursUpdated,
            closingHoursUpdated,
            openingMinutesUpdated,
            closingMinutesUpdated,
            successType,
          },
        });
      }
    } catch (error) {
      console.error("Error in updating the hours:", error);
    }
  };

  const areAllFieldsFilled = () => {
    return (
      openingHoursUpdated >= 0 &&
      closingHoursUpdated >= 0 &&
      openingMinutesUpdated >= 0 &&
      closingMinutesUpdated >= 0
    );
  };

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement>,
    setState: React.Dispatch<React.SetStateAction<number>>
  ) => {
    setState(parseInt(event.target.value));
    setIsButtonDisabled(!areAllFieldsFilled());
  };

  return (
    <div className={styles.ChasoveMain}>
      <div className={styles.openingClosing}>
        <h1> Ново работно време:</h1>
        <div className={styles.opening}>
          <h2>Отваряне:</h2>
          <div className={styles.right}>
            <input
              id="openingHoursInput"
              type="number"
              placeholder={`${hoursManagementData.openingHours}`}
              onChange={(e) => handleInputChange(e, setOpeningHoursUpdated)}
            />
            <input
              type="number"
              placeholder={`${hoursManagementData.openingMinutes.toLocaleString(
                undefined,
                {
                  minimumIntegerDigits: 2,
                }
              )}`}
              onChange={(e) => handleInputChange(e, setOpeningMinutesUpdated)}
            />
          </div>
        </div>
        <div className={styles.closing}>
          <h2>Затваряне:</h2>
          <div className={styles.right}>
            <input
              type="number"
              placeholder={`${hoursManagementData.closingHours}`}
              onChange={(e) => handleInputChange(e, setClosingHoursUpdated)}
            />
            <input
              type="number"
              placeholder={`${hoursManagementData.closingMinutes.toLocaleString(
                undefined,
                {
                  minimumIntegerDigits: 2,
                }
              )}`}
              onChange={(e) => handleInputChange(e, setClosingMinutesUpdated)}
            />
          </div>
        </div>
        <button
          onClick={() =>
            void updateHourManagementData(
              openingHoursUpdated,
              closingHoursUpdated,
              openingMinutesUpdated,
              closingMinutesUpdated
            )
          }
          disabled={isButtonDisabled}>
          Обнови
        </button>
      </div>
      <div className={styles.currentHours}>
        <h3>Сегашнo работнo време:</h3>
        <h4>
          От {hoursManagementData.openingHours}:
          {hoursManagementData.openingMinutes.toLocaleString(undefined, {
            minimumIntegerDigits: 2,
          })}{" "}
          до&nbsp;
          {hoursManagementData.closingHours}:
          {hoursManagementData.closingMinutes.toLocaleString(undefined, {
            minimumIntegerDigits: 2,
          })}
        </h4>
      </div>
    </div>
  );
};

export default Chasove;
