import React, { FC, useState, useEffect } from "react";
import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styles from "./Calendar.module.scss";
import { useGlobalContext } from "~/utils/store";
//toshu kykata beshe tuk

interface CalendarBaseProps {
  onSelectDate: (date: Date) => void;
}

const CalendarBase: FC<CalendarBaseProps> = ({ onSelectDate }) => {
  const {calendarState} = useGlobalContext();
  console.log("office: " + calendarState);
  return (
    <ReactCalendar
      minDate={new Date()}
      className={`${styles.calendarSelf} REACT-CALENDAR`}
      view="month"
      onClickDay={(date) => onSelectDate(date)}
      tileDisabled={({ date, view, }) => {
        if  (calendarState === 1) {
          // Disable Fridays (5), Saturdays (6) and Sundays (0)
          if (view === "month" && (date.getDay() === 5) || (date.getDay() === 6 || date.getDay() === 0)) {
            return true;
        }
        } else if(calendarState === 2) {
          // Disable Mondays (1), Tuesdays (2), Wednesdays (3), Thursdays (4), Saturdays (6) and Sundays (0)
          if(view === "month" && (date.getDay() === 1) || (date.getDay() === 2 || date.getDay() === 3 || date.getDay() === 4) || (date.getDay() === 6 || date.getDay() === 0)) {
            return true;
          }
        } else{
          if (view === "month" && (date.getDay() === 6 || date.getDay() === 0)) {
            return true;
        }}
        return false;
      }}
    />
  );
};


export default CalendarBase;
