import { FC } from "react";
import { useRouter } from "next/router";
import styles from "./Success.module.scss";
import Link from "next/link";

const SuccessHours: FC = () => {
  const router = useRouter();
  const { openingHoursUpdated } = router.query;
  const { closingHoursUpdated } = router.query;
  const { openingMinutesUpdated } = router.query;
  const { closingMinutesUpdated } = router.query;

  return (
    <div className={styles.successMain}>
      <div className={styles.success}>
        <div>
          <h1 lang="bg"> Успешно актуализиране на работните часове.</h1>
          <hr />
          <h2 lang="bg">
            От {openingHoursUpdated}:{openingMinutesUpdated} до{" "}
            {closingHoursUpdated}:{closingMinutesUpdated}
          </h2>
        </div>
        <Link className={styles.link} href="/tablo">
          Към таблото
        </Link>
      </div>
    </div>
  );
};

export default SuccessHours;
