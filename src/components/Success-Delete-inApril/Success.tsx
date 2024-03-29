// import { FC } from "react";
// import { useRouter } from "next/router";
// import styles from "./Success.module.scss";
// import Link from "next/link";

// const Success: FC = () => {
//   const router = useRouter();
//   const { appointmentDate } = router.query;
//   const parseDate = appointmentDate ? String(appointmentDate) : "";

//   function getFormattedDate(date: Date) {
//     const capitalizeFirstLetter = (str: string) => {
//       return str.charAt(0).toUpperCase() + str.slice(1);
//     };

//     const day = date.getDate();
//     const month = capitalizeFirstLetter(
//       date.toLocaleString("bg-BG", { month: "long" })
//     );
//     const dayName = capitalizeFirstLetter(
//       date.toLocaleString("bg-BG", { weekday: "long" })
//     );
//     return `${day} ${month} (${dayName})`;
//   }

//   function getHour(date: Date) {
//     const hour = date.getHours();
//     const minutes = date.getMinutes();

//     return `за ${hour}:${minutes}`;
//   }

//   return (
//     <div className={styles.successMain}>
//       <div className={styles.success}>
//         <div>
//           <h1> Успешно запазихте час</h1>
//           <hr />
//         </div>
//         <h2>{getFormattedDate(new Date(parseDate))}</h2>
//         <h3>{`${getHour(new Date(parseDate)).split(":")[0]}:${String(
//           getHour(new Date(parseDate)).split(":")[1]
//         ).padStart(2, "0")}`}</h3>
//         <Link className={styles.link} href="/">
//           Начало
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Success;
